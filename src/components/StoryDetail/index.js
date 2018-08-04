import React, { Component } from 'react';
import { connect } from 'react-redux';
import Story from '../Story';
import CommentList from '../CommentList';
import { fetchActiveStory, loadComments } from '../../actions';
import './StoryDetail.css';

class StoryDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const storyId = this.props.match.params.id;
        this.props.fetchActiveStory(storyId);
        this.props.loadComments(storyId);
    }

    render() {
        const {story} = this.props;

        return (
            <div className="storydetail">
                {story &&
                    <Story story={story}/> }
                <CommentList comments={this.props.comments}/>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        story: state.stories.activeStory,
        comments: state.comments.comments
    };
};

export default connect(mapStateToProps, { fetchActiveStory, loadComments })(StoryDetail);