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
                    <h1>Welcome to GifComic</h1>
                    <h2>Build your own interactive comic strips using gifs!</h2>
                </div>
                <div className="recentcomics">
                <h2>Check out what other users have been creating below</h2>
                {this.props.allData.map((item, i) => (
                            <div className='container-fluid'>
                            <li key = {i}>
                            <Cards {...item}/>
                            <p>Built by {item.userEmail}</p>
                            </li>
                            </div>
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
