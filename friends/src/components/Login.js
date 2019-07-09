import React from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";
import { login } from '../actions';

import '../styles.css';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    handleLogin = event => {
        event.preventDefault();
        this.props
            .login(this.state.credentials)
            .then(() => this.props.history.push("/protected"));
    };
    
    render() {
        return (
            <div>
                <form className ='login-form' onSubmit = {this.handleLogin}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}    
                    />
                    <button>
                        {this.props.isLogginIn ? (
                            <Loader type='ThreeDots' color='#1f2a38' height='12' width='26' />
                        ) : (
                            'Log In'
                        )}
                    </button>    
                </form>
            </div>    
        )
    }
};

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(
    mapStateToProps,
    { login }
)(Login)