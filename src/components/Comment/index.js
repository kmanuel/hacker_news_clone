import React from 'react';
import './Comment.less'

export default ({ comment }) => {
    return (
        <div className="comment">
            <div className="head">
                {comment.by} 0 minutes ago [-]
            </div>
            <div className="body">
                <p dangerouslySetInnerHTML={{ __html: comment.text }}></p>
                {comment.kids &&
                    <div>show {comment.kids.length} replies</div>
                }
            </div>
        </div>
    )
}