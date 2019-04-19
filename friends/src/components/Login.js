import React from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";
// import { login } from ''

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
                <form>
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
                    <button>Log In</button>    
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