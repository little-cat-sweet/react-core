import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
class Header extends Component {

    back = ()=>{
        this.props.history.goBack();
    }

    forward = ()=>{
        this.props.history.goForward();
    }
    render() {
        return (
            <div>
                <div className="page-header"><h2>React Router Demo</h2></div>
                <hr/>
                <button onClick={()=>this.back()}>back</button>
                <br/>
                <button onClick={()=>this.forward()}>forward</button>
            </div>
        );
    }
}
// the withRouter could make normal component to have the router component's property.
export default withRouter(Header);