import React, {Component} from 'react';
import Search from "./Components/Search"
import List from "./Components/List"
class App extends Component {


    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
    }

    updateAppState = (stateObj)=>{
        this.setState(stateObj)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Search updateAppState={this.updateAppState}/>
                    <List {...this.state}/>
                </div>
            </div>
        );
    }
}

export default App;