import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadStory } from '../../actions/itemActions';
import Story from '../Story';
import CommentList from '../CommentList';
import './StoryDetail.less';

class StoryDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const storyId = this.props.match.params.id;
        this.props.loadStory(storyId);
    }

    render() {
        const { story } = this.props;

        return (
            <div className="storydetail">
                {story &&
                <Story story={story}/> }
                <CommentList comments={this.props.comments}/>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    const storyId = props.match.params.id;
    const story = state.items.story[storyId];
    const comments = [];

    if (story) {
        story.kids.forEach(commentId => {
            const comment = state.items.comment[commentId];
            if (comment) {
                comments.push(comment);
            }
        });
    }

    return { story, comments };
};

export default connect(mapStateToProps, { loadStory })(StoryDetail);
