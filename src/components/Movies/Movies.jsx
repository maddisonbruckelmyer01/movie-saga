import React, {Component} from 'react';
import {connect} from 'react-redux';

class Movies extends Component {
    
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })
    }

    render() {

        let moviesToDom = this.props.reduxStore.movies.map((movie)=> {
            return (<li key={movie.id}>{movie.title} <img src={movie.poster} alt={movie.title}/></li>)
        })
        return(
            <div>
                <pre>{JSON.stringify(this.props.reduxStore)}</pre>
                <ul>
                    {moviesToDom}
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

export default connect(mapStateToProps)(Movies);