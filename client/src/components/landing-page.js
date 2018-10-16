import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Cards from "./cards";
import {fetchallData} from '../actions/allData';
import LoginForm from './login-form';


    export class LandingPage extends React.Component {
        componentDidMount() {
            this.props.dispatch(fetchallData());
            console.log(this);
            console.log(this.props.allData);
        }
    
        render() {
            // Only visible to logged in users
            if (this.props.loggedIn) {
                //return <Redirect to="/dashboard" />;
            }
    

         return (
             <div>
             <div className="home">
                    <h2>Welcome to GifComic</h2>
                    <LoginForm />
                    <Link to="/register">Register</Link>
                </div>
                <Link to="/dashboard">Dashboard</Link>
                <div className="dashboard-username">
                    Email: {this.props.email}
                </div>
                <div className="recentcomics">
                {this.props.allData.map((item, i) => (
                            <li key = {i}>
                            <Cards {...item}/>
                            <p>Built By {item.userEmail}</p>
                            </li>
                        ))}
                </div>
                </div>
            );
        }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    allData: state.allData.data
});

export default connect(mapStateToProps)(LandingPage);
