import React, {Component} from 'react';
import './index.css'
class Item extends Component {
    state = {
        mouse:false
    }
    handleMouse = (isEnter)=>{
        return ()=> {
            this.setState({mouse: isEnter})
        }
    }
    handleChecked = (id)=>{
        return (event) =>{
            this.props.updateThing(id, event.target.checked)
        }
    }
    render() {
        const {id,name, done} = this.props
        return (
            <div>
                <li style={{backgroundColor:this.state.mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" defaultChecked={done} onChange={this.handleChecked(id)}/>
                        <span>{name}</span>
                    </label>
                    <button className="btn btn-danger" style={{display: this.state.mouse ? 'block' : 'none'}}>删除</button>
                </li>
            </div>
        );
    }
}

export default Item;