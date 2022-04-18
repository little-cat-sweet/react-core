import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import Detail from "./Detail";
class Message extends Component {

    state = {
        messages:[
            {id:"01", title:"message1"},
            {id:"02", title: "message2"},
            {id:"03", title: "message3"}
        ]
    }

    render() {
        const {messages} = this.state
        return (
            <div>
                <ul>
                    {
                        messages.map((message)=>{
                            return(
                                <li key={message.id}>
                                    <Link replace={true} to={{pathname:'/home/message/detail',state:{id:message.id, title:message.title}}}>{message.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <Route path="/home/message/detail" component={Detail}/>
            </div>

        )
    }
}

export default Message;