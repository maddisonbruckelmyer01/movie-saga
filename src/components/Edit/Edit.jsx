import React, {Component} from 'react';
import {connect} from 'react-redux';

class Edit extends Component {

    state = {
        movie_id: this.props.reduxStore.details.id,
        title: '',
        description: ''
    }

    handleTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }//end handleTitle

    handleDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }//end handleDescription
  
    handleFirstClick = () => {
        let action = {
            movie_id: this.props.reduxStore.details.id,
            title: this.state.title,
            description: this.state.description
        }
        this.props.dispatch({
            type: 'CHANGE_MOVIE',
            payload: action
        })
    }//end handleFirstClick

    handleClick = () => {
        this.props.history.push('/');
    }//end handleClick

    handleCancel = () => {
        this.props.history.push('/details');
    }//end handleCancel

    render() {
        console.log(this.state)
        return (
            <div>
                <p>edit</p>
                <input placeholder="change title" onChange={this.handleTitle}/>
                <input placeholder="change description" onChange={this.handleDescription} />
                <button onClick={this.handleFirstClick}>Submit</button>
                <button onClick={this.handleCancel}>Cancel</button>
                <button onClick={this.handleClick}>Back To Movies</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Edit);