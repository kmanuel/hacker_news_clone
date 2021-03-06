import React from 'react';
import Comment from '../Comment';

export default ({comments}) => {
    const commentItems = comments.map(c => <li key={c.id}><Comment comment={c} /></li>);

    return (
        <ul>
            {commentItems}
        </ul>
    );
}