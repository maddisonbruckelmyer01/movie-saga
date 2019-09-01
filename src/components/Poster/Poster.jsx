import React, {Component} from 'react';
import './Poster.css';
import {connect} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { withRouter } from "react-router";

class Poster extends Component {

    handleClick = () => {
        this.props.history.push('/genres')
    }//end handleClick

    render() {
        return(
            <div className="poster">
                <p><img src={this.props.poster} onClick={this.handleClick}/></p>
            </div>
        )
    }
}

export default withRouter(connect()(Poster));