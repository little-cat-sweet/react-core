import React, {Component} from 'react';
import './index.css'
class List extends Component {

    render() {
        const {users, isFirst,isLoading, err} = this.props
        return (
            <div>
                <div className="row">
                    {
                        isFirst ? <h2>Welcome, input the user name, who you want to find.</h2> :
                            isLoading ? <h2>The data is lading...</h2> :
                                err ? <h2>{err}</h2>:
                                    users.map((user)=>{
                                        return(
                                            <div className="card" key={user.id}>
                                                <a href={user.html_url} target="_blank" rel="noreferrer">
                                                    <img alt="portrait" src={user.avatar_url} style={{width:"100px"}}/>
                                                </a>
                                                <p className="card-text">{user.login}</p>
                                            </div>)
                        })
                    }
                </div>
            </div>
        );
    }
}

export default List;