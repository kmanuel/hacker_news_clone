import React, { Component } from 'react';
import Story from '../Story';
import { fetchNewest } from '../../actions';
import './Newest.css';

import { connect } from 'react-redux';

class Newest extends Component {

    componentDidMount() {
        this.props.fetchNewest();
    }

    render() {
        const stories = this.props.stories.map(s => <li key={s.id}><Story story={s}/></li>);

        return (
            <ol className="newest_list">
                {stories}
            </ol>
        );
    }
}


const mapStateToProps = (state) => {
    return { stories: state.stories.newest };
};

export default connect(mapStateToProps, { fetchNewest })(Newest);


