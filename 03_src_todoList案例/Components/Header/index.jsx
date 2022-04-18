import React, {Component} from 'react';
import './index.css'
import {nanoid} from "nanoid";
class Header extends Component {
    addThing = (event)=>{
        const {keyCode, target} = event
        if(keyCode !== 13) return
        if(target.value.trim() === ''){
            alert("The thing, which you want to do should not be null")
            return;
        }
        const thing = {id:nanoid(),name:target.value, done:false}
        this.props.addThing(thing)
        event.target.value = ''
    }
    render() {
        return (
            <div>
                <div className="todo-header">
                    <input onKeyUp={this.addThing} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
                </div>
            </div>
        );
    }
}

export default Header;