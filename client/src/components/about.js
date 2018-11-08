import React from 'react';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export class About extends React.Component{
    render () {
        return <div className="introinfo">
        <h2>Build your own interactive comic strips using gifs!</h2>
        <h2>Check out what other users have been creating below</h2>
        </div>
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(About);