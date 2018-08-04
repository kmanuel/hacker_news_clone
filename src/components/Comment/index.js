import React from 'react';
import './Comment.css'

export default ({ comment }) => {
    return (
        <div className="comment">
            <div className="comment_head sm_grey_text">
                {comment.by} 0 minutes ago [-]
            </div>
            <div className="comment_body">
                <p dangerouslySetInnerHTML={{ __html: comment.text }}></p>
                {comment.kids &&
                    <div>show {comment.kids.length} replies</div>
                }
            </div>
        </div>
    )
}