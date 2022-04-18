import React from 'react'
import Hello from "./Components/Hello/Hello";
import Welcome from "./Components/Welcome/Welcome";
export default class App extends React.Component{
    render(){
        return(
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}