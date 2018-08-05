import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.less';

export default () => {
    return (
        <div className="navigation">
            <div className="brand">
                <div className="logo">Y</div>
                <div className="hn">Reackter News</div>
            </div>
            <div className="items">
                <Link to="/" className="active">top</Link>
                <div>comments</div>
                <div>show</div>
                <div>ask</div>
                <div>jobs</div>
                <div>submit</div>
            </div>
        </div>
    );
}