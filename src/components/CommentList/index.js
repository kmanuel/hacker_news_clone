import React from 'react';
import Comment from '../Comment';
import './CommentList.css';

export default ({comments}) => {
    const commentItems = comments.map(c => <Comment key={c.id} comment={c} />);

    return (
        <div>
            {commentItems}
        </div>
    );
}