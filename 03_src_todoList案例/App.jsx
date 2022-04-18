import React from 'react'

import './App.css'

import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";


export default class App extends React.Component{

    state = {
        things:[
            {id:"001", name:"Jack", done:true},
            {id:"002", name:"Mark", done:false},
            {id:"003", name:"Mary", done:true}
        ]
    }

    updateThing = (id, done)=>{
        const {things} = this.state
        const newThings = things.map((thing) => {
            if(thing.id === id) {
                return {...thing, done}
            }else{
                return thing
            }
        })
        this.setState({things: newThings})
    }
    addThing = (thing)=>{
        const {things} = this.state
        const newThings = [thing,...things]
        this.setState({things: newThings})
    }
    render(){
        const things = this.state.things;
        return(
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addThing={this.addThing}/>
                        <List things={things} updateThing={this.updateThing}/>
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}