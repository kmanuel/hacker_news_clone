import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/userActions';

class Login extends Component {

    handleChange = event => {
        this.setState({ username: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { username } = this.state;

        this.props.login(username);
    };

    render() {
        if (this.props.isLoggedIn) {
            return <div>You're already logged in!</div>
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="login" onChange={this.handleChange}/>
                    <button>login</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({auth}) => {
    return { isLoggedIn: auth.user.isLoggedIn };
};

export default connect(mapStateToProps, { login })(Login);
