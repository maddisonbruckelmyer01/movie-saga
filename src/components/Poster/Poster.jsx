import React, {Component} from 'react';
import './Poster.css';


class Poster extends Component {
    render() {
        return(
            <div className="poster">
                <p><img src={this.props.poster} /></p>
            </div>
        )
    }
}

export default Poster;