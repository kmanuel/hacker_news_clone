import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../actions/userActions';

const mapStateToProps = ({ auth }) => {
    return {
        auth
    }
};

export default connect(mapStateToProps, { logout })((props) => {
    if (props.auth.user.isLoggedIn) {
        return (
            <div>
                {props.auth.user.name} -
                <button onClick={props.logout}>Logout</button>
            </div>
        );
    }

    return (
        <div>
            <Link to="/login">Login</Link>
        </div>
    );
});
