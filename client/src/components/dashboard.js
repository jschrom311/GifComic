import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {fetchProtectedData} from '../actions/protected-data';
import Add from "./Add";
import Cards from "./cards";

export class Dashboard extends React.Component {
    componentDidMount() {
        if (!this.props.loggedIn) {
            //return;
        }
        this.props.dispatch(fetchProtectedData());
        console.log(this);
        console.log(this.props.protectedData);
    }

    render() {
        // Only visible to logged in users
        if (!this.props.loggedIn) {
            return <Redirect to="/" />;
        }

        return (
            <div className="dashboard">
                <div className="dashboard-username container-fluid">
                <h1>GifComic Profile</h1>
                    User: {this.props.email}
                <br />
                <h2>Saved Comics:</h2>
                </div>
                {this.props.protectedData.map((item, i) => (
                    <div className="container-fluid">
                    <li key = {i}>
                    <Cards {...item}/>
                    </li>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    console.log(currentUser);
    return {
        loggedIn: currentUser !== null,
        email: currentUser ? state.auth.currentUser.email : '',
        protectedData: state.protectedData.data
    };
};

export default connect(mapStateToProps)(Dashboard);
