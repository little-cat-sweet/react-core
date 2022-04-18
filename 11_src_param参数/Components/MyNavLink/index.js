import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavLink extends Component {
    render() {
        return (
            <div>
               <NavLink activeClassName="demo1" className="list-group-item" {...this.props}/>
            </div>
        );
    }
}

export default MyNavLink;