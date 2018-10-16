import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser, setAuthToken} from '../actions/auth';
import {Link, Redirect} from 'react-router-dom';
import {clearAuthToken} from '../local-storage';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(setCurrentUser(null));
        this.props.dispatch(setAuthToken(null));
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <div className="navbar navbar-light bg-light shadow-sm">
                <a className="navbar-brand" href="#">
                <img src={require("./gifcomiclogo3.png")} alt="logo" className="img-responsive" width="399" height="74"></img>
                <Link to='/dashboard'>Profile</Link>
                <Link to='/home'>Create Comic</Link>
                <Link to='/'>Home</Link>
                </a>
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
