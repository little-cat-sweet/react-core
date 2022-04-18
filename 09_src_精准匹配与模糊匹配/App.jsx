import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./Components/Header";
import MyNavLink from "./Components/MyNavLink";
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
                            {/*<NavLink activeClassName="demo1" className="list-group-item" to="/about">About</NavLink>*/}
                            {/*<NavLink activeClassName="demo1" className="list-group-item" to="/home">Home</NavLink>*/}
                            <MyNavLink to="/about" children="About"/>
                            <MyNavLink to="/home" children="Home"/>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*the switch component could stop the multiply component to be loaded, which */}
                                {/*has the same path's value*/}
                                <Switch>
                                    {/*The exact means that the route's url is equals the router's url absolutely.
                                    and the default type is vague match.*/}
                                    <Route exact path="/home" component={Home}/>
                                    <Route exact path="/about" component={About}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;