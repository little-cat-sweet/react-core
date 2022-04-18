import React, {Component} from 'react';
import axios from "axios";
class App extends Component {

    getStudentData = ()=>{
        axios.get("/api1/students").then(
            response => {
                console.log("successfully !!!", response.data)
            },
            error =>{
                console.log("failed!!!", error.data)
            }
        )
    }
    getCarData = ()=>{
        axios.get("/api2/cars").then(
            response => {
                console.log("The cars is ", response.data)
            },
            error => {
                console.log("The require has been failed..", error.data)
            }
        )
    }

    render() {
        return (
            <div>
                <p>hello world!!!</p>
                <button onClick={this.getStudentData}>click me to get some information about
                students.</button>
                <button onClick={this.getCarData}>Click me to get some information about cars.</button>
            </div>
        );
    }
}

export default App;