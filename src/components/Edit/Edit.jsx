import React, {Component} from 'react';

class Edit extends Component {
    handleClick = () =>{
        this.props.history.push('/')
    }//end handleClick
    render() {
        return (
            <div>
                <p>edit</p>
                <input placeholder="change title" />
                <input placeholder="change description" />
                <button onClick={this.handleClick}>Back To Movies</button>
            </div>
        )
    }
}

export default Edit;