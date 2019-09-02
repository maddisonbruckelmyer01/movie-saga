import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {


    handleClick = () => {
        this.props.history.push('/')
    }//end handleClick

    handleSecondClick = () => {
        this.props.history.push('/edit')
    }//end handleSecondClick

    render() {
        
        return(
            <div>
                <button onClick={this.handleClick}>Back To List</button>
                <button onClick={this.handleSecondClick}>Edit</button>
                <h3>{this.props.reduxStore.details.title}</h3>
                <p>{this.props.reduxStore.details.description}</p>
                <h5>Genres</h5>
                <ul>
                {
                    this.props.reduxStore.genres.map((genre) => {
                        return <li>{genre.genre}</li>
                    })
                }
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Details);