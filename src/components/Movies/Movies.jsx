import React, {Component} from 'react';
import {connect} from 'react-redux';


class Movies extends Component {
    
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })
    }

    
    handleClick = (id) => {
        console.log('picture clicked')
        this.props.dispatch({
            type: 'FETCH_DETAILS',
            payload: id
        })
        this.props.history.push('/details');
    }


    render() { 
        return(
            <div>
                {this.props.reduxStore.movies.map((movie) => {
                    return (<><img src={movie.poster} alt={movie.title} onClick={() => {this.handleClick(movie.id)}}/>
                        <h4>{movie.title}</h4> <p>{movie.description}</p> </>);
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