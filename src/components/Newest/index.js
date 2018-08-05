import React, { Component } from 'react';
import Story from '../Story';
import { initialNewestFetch, loadItem } from '../../actions';
import './Newest.less';

import { connect } from 'react-redux';

class Newest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            pageSize: process.env.REACT_APP_PAGE_SIZE
        }
    }

    componentDidMount() {
        this.props.initialNewestFetch();
    }

    onLoadMore = () => {
        const { page, pageSize } = this.state;
        const fromIdx = page * pageSize;
        const toIdx = (page + 1) * pageSize;
        this.props.newest.slice(fromIdx, toIdx)
            .forEach(this.props.loadItem);

        this.setState((prevState) => {
            return {
                page: prevState.page + 1
            }
        });
    };

    getStoriesToShow = () => {
        const { page, pageSize } = this.state;
        const fromIdx = 0;
        const toIdx = (page + 1) * pageSize;

        return this.props.newest.slice(fromIdx, toIdx);
    };

    render() {
        const stories = this.getStoriesToShow()
            .map(storyId => this.props.stories[storyId])
            .filter(story => story)
            .map(story => <li key={story.id}><Story story={story}/></li>);

        return (
            <div>
                <ol className="newest_list">
                    {stories}
                    <button className="more_btn"
                            onClick={this.onLoadMore}>
                        More
                    </button>
                </ol>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        newest: state.stories.newest,
        stories: state.items.story
    };
};

export default connect(mapStateToProps, { initialNewestFetch, loadItem })(Newest);


