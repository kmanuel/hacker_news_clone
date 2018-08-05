import React from 'react';
import { connect } from 'react-redux';
import {loadStory} from '../../actions';
import { Link } from 'react-router-dom';
import './Story.css';

const StoryDetail = (props) => {

    const { story } = props;

    const stripUrl = (fullUrl) => {
        return fullUrl ? fullUrl.match(/(?<=:\/\/).*(?=\/)/) : '';
    };

    const minutesSinceNow = (timestamp) => {
        const now = Date.now() / 1000;

        const msDifference = now - timestamp;
        const secDifference = msDifference / 1000;
        const minDifference = secDifference / 60;
        return Math.round(minDifference);
    };

    const minutesAgo = minutesSinceNow(story.time);

    const preload = (storyId) => {
        props.loadStory(storyId);
    };

    return (
        <div className="story">
            <div className="story_main">
                <a className="story_title"
                   href={story.url}
                   target="_blank">
                    {story.title}
                </a>
                <div className="story_url">({stripUrl(story.url)})</div>
            </div>
            <div className="story_sub">
                <div>{story.score} points</div>
                <div>by {story.by}</div>
                <div>{minutesAgo} minutes ago</div>
                <div>hide</div>
                <Link to={`/stories/${story.id}`}
                      onMouseEnter={() => preload(story.id)}>
                    {(story.kids) ? story.kids.length : '0'} comments
                </Link>
            </div>
        </div>
    );
};

export default connect(null, { loadStory })(StoryDetail);