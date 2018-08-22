import React from 'react';
import { connect } from 'react-redux';
import './Footer.less';

const mapStateToProps = ({auth}) => {
    return { user: auth.user };
};

export default connect(mapStateToProps)((props) => {
    const { user } = props;

    if (!user.isLoggedIn) {
        return <div className="footer">
            footer goes here
        </div>
    }

    return <div className="footer">
        all your footer are belong to {user.name}
    </div>
});
