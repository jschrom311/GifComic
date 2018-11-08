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
                <span>
                <Link to='/dashboard'>
                <button className="btn btn-light" type="button">
                Profile
                </button>
                </Link>
                <Link to='/home'>
                <button className="btn btn-light" type="button">
                Create Comic
                </button>
                </Link>
                <button className="btn btn-light" onClick={() => this.logOut()}>Log out</button>
                </span>
            );
        }
        else {
            logOutButton= (
                <span>
                <Link to='/login-form'>
                <button className="btn btn-light" type="button">
                Login
                </button>
                </Link>
                <Link to='/registration-form'>
                <button className="btn btn-light" type="button">
                Sign up
                </button>
                </Link>
                </span>
            )
        }
        return (
            <nav className="navbar navbar-light bg-light shadow-sm" role="navigation">
                <img src={require("./gifcomiclogo3.png")} alt="logo" className="img-responsive" width="399" height="74"></img>
                <Link to='/'>
                <button className="btn btn-light" type="button">
                Home
                </button>
                </Link>
                {/*<Link to='/about'>
                <button className="btn btn-light" type="button">
                About
                </button>
        </Link>*/}
                {logOutButton}
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
