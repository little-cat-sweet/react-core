import React, {Component} from 'react';
import MyNavLink from "../../Components/MyNavLink";
import {Route, Redirect, Switch} from "react-router-dom";
import News from "./News";
import Message from "./Message";
class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/news">News</MyNavLink>
                            {/*<a className="list-group-item" href="./home-news.html">News</a>*/}
                        </li>
                        <li>
                            <MyNavLink to="/home/message">Message</MyNavLink>
                            {/*<a className="list-group-item active" href="./home-message.html">Message</a>*/}
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path="/home/news" component={News}/>
                            <Route path="/home/message" component={Message}/>
                            <Redirect to="home/news"/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;