import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default () => {
    return (
        <div className="navigation">
            <div className="navigation_brand">
                <div className="navigation_logo">Y</div>
                <div className="navigation_hn">Reackter News</div>
            </div>
            <div className="navigation_items">
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