import React from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";
// import { login } from ''

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
    
    render() {
        return (
            <div>
                <form className ='login-form'>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
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
    {}
)(Login)