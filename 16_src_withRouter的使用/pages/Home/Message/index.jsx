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

    pushShow = (id, title)=>{
        this.props.history.push("/home/message/detail",{id, title})
    }

    replaceShow = (id, title)=>{
        this.props.history.replace("/home/message/detail",{id, title})
    }

    back = ()=>{
        this.props.history.goBack();
    }

    forward = ()=>{
        this.props.history.goForward();
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
                                    <button onClick={() => this.pushShow(message.id, message.title)}>push</button>&nbsp;
                                    <button onClick={() => this.replaceShow(message.id, message.title)}>replace</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <Route path="/home/message/detail" component={Detail}/>
                <button onClick={()=>this.back()}>Back</button> &nbsp;
                <button onClick={()=>this.forward()}>forward</button>
            </div>

        )
    }
}

export default Message;