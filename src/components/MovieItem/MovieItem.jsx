import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieItem extends Component {
    
    render(){
        return(
            <div>
               
                <h1>{this.props.movie.title}</h1>
                <p>{this.props.movie.description}</p>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}


export default connect(mapStateToProps)(MovieItem);