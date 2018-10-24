import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {Route, withRouter, Redirect} from 'react-router-dom';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import { connect } from 'net';
import dashboard from './dashboard';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.email, values.password));
    }
    
    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        /*if (props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }*/
        return (
            <form
                className="login-form jumbotron"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <div className="logform">
                <h1>Login</h1>
                {error}
                <label htmlFor="email">Email</label>
                <Field
                    component={Input}
                    type="text"
                    name="email"
                    id="email"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button className="btn btn-light" disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
                <br></br>
                <p>Try it out with:  </p>
                <p>Email: demo@demo.com</p>
                <p>Password: demo</p>

                </div>
            </form>
        );
    }
}

/*const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
});

export class connect{(mapStateToProps)(Dashboard)};*/

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'email'))
})(LoginForm);
