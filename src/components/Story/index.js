import React from 'react';
import './Story.css';

export default ({ story }) => {

    const stripUrl = (fullUrl) => {
        return fullUrl.match(/(?<=:\/\/).*(?=\/)/);
    };

    const minutesSinceNow = (timestamp) => {
        const now = Date.now() / 1000;

        const msDifference = now - timestamp;
        const secDifference = msDifference / 1000;
        const minDifference = secDifference / 60;
        return Math.round(minDifference);
    };

    const minutesAgo = minutesSinceNow(story.time);

    return (
        <div className="story">
            <div className="story_main">
                <div className="story_title">{story.title}</div>
                <div className="story_url">({stripUrl(story.url)})</div>
            </div>
            <div className="story_sub">
                <div>{story.score} points</div>
                <div>by {story.by}</div>
                <div>{minutesAgo} minutes ago</div>
                <div>hide</div>
                <div>{story.kids.length} comments</div>
            </div>
        </div>
    );
};