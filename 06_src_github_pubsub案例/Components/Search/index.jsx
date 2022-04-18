import React, {Component} from 'react';
import axios from "axios";
import PubSub from 'pubsub-js'
class Search extends Component {


    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
    }

    search = ()=>{
        console.log("The search component has send a require...")
        // PubSub.publish("updateGithubItems",{name:"jack",age:18})
        const {keyWordElement:{value : keyWord}} = this
        PubSub.publish("updateGithubItems",{isFirst : false,isLoading: true})
        axios.get('/api1/search/users?q='+keyWord).then(
            response =>{
                // console.log(response.data.items)
                PubSub.publish("updateGithubItems",{isLoading: false,users: response.data.items})
            },
            error =>{
                PubSub.publish("updateGithubItems",{isLoading: false,err : error.data})
            }
        )
    }

    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={c =>{this.keyWordElement = c}} type="text" placeholder="enter the name you search"/>&nbsp;
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default Search;