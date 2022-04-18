import React, {Component} from 'react';
import Item from "../Item";
import './index.css'

class List extends Component {

    render() {
        const {things,updateThing} = this.props
        return (
            <div>
                <ul className="todo-main">
                    {
                        things.map((thing)=>{
                            return <Item key={thing.id} {...thing} updateThing = {updateThing}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default List;