import React, {Component} from 'react';
import {NavLink,Route } from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./Components/Header";

class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*<a className="list-group-item" href="./about.html">About</a>*/}
                            {/*<a className="list-group-item active" href="./home.html">Home</a>*/}
                            <NavLink activeClassName="demo1" className="list-group-item" to="/about">About</NavLink>
                            <NavLink activeClassName="demo1" className="list-group-item" to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Route path="/home" component={Home}/>
                                <Route path="/about" component={About}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;