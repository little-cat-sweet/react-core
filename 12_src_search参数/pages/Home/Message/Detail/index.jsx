import React, {Component} from 'react';
import qs from 'querystring'
class Detail extends Component {
    state = {
        details:[
            {id:"01", content:"I love my country"},
            {id:"02", content: "I always be there for you guys.."},
            {id:"03",  content: "I just can't not hold my shoe"}
        ]
    }
    render() {

        const {details} = this.state
        const {search} = this.props.location
        const {id, title} = qs.parse(search.slice(1))

        const detail = details.find((value)=>{
            return value.id === id;
        })

        return (
            <ul>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>content:{detail.content}</li>
            </ul>
        );
    }
}

export default Detail;