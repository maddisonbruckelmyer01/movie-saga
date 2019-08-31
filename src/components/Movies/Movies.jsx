import React, {Component} from 'react';
import {connect} from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import Poster from '../Poster/Poster'

class Movies extends Component {
    
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })
    }

    render() {

        return(
            <div>
                <pre>{JSON.stringify(this.props.reduxStore)}</pre>
                {this.props.reduxStore.movies.map((movie) => {
                    return (<>
                        <Poster poster={movie.poster} />
                        <MovieItem key={movie.id} movie={movie} />
                         </>
                    );
                })}
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