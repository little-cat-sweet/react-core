import React, {Component} from 'react';
import Search from "./Components/Search"
import List from "./Components/List"
class App extends Component {



    render() {
        return (
            <div>
                <div className="container">
                    <Search/>
                    <List/>
                </div>
            </div>
        );
    }
}

export default App;