import React from 'react';
import './Navigation.css';

export default () => {
    return (
        <div className="navigation">
            <div className="navigation_logo">logo</div>
            <div className="navigation_hn">Reackter News</div>
            <div className="active">new</div>
            <div>comments</div>
            <div>show</div>
            <div>ask</div>
            <div>jobs</div>
            <div>submit</div>
        </div>
    );
}