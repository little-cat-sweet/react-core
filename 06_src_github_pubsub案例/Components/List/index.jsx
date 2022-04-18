import React, {Component} from 'react';
import './index.css'
import PubSub from 'pubsub-js'
class List extends Component {

    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
    }

    componentDidMount() {

        this.token = PubSub.subscribe('updateGithubItems',(_,data)=>{
            console.log("The list component has got the information..")
            console.log("The data is " + data)
            this.setState(data)
        })
    }

    componentWillUnmount() {

        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users, isFirst,isLoading, err} = this.state
        return (
            <div>
                <div className="row">
                    {
                        isFirst ? <h2>Welcome, input the user name, who you want to find.</h2> :
                            isLoading ? <h2>The data is lading...</h2> :
                                err ? <h2>{err}</h2>:
                                    users.map((user)=>{
                                        return(
                                            <div className="card" key={user.id}>
                                                <a href={user.html_url} target="_blank" rel="noreferrer">
                                                    <img alt="portrait" src={user.avatar_url} style={{width:"100px"}}/>
                                                </a>
                                                <p className="card-text">{user.login}</p>
                                            </div>)
                        })
                    }
                </div>
            </div>
        );
    }
}

export default List;