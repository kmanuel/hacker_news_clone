import React, { Component } from 'react';
import Story from '../Story';
import { fetchNewest, loadItems } from '../../actions';
import './Newest.css';

import { connect } from 'react-redux';

class Newest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            pageSize: 2
        }
    }

    componentDidMount() {
        this.props.fetchNewest();
    }

    onLoadMore = () => {
        const {page, pageSize} = this.state;
        const fromIdx = page * pageSize;
        const toIdx = (page + 1) * pageSize;

        this.setState((prevState) => {
            return {
                page: prevState.page + 1
            }
        });

        this.props.loadItems(fromIdx, toIdx);
    };

    render() {
        const stories = this.props.stories.map(s => <li key={s.id}><Story story={s}/></li>);

        return (
            <div>
            <ol className="newest_list">
                {stories}
                <button onClick={this.onLoadMore}>More</button>
            </ol>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        stories: state.stories.resolved
    };
};

export default connect(mapStateToProps, { fetchNewest, loadItems })(Newest);


