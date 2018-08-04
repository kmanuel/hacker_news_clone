import { combineReducers } from 'redux';
import storyReducer from './storyReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
    stories: storyReducer,
    comments: commentsReducer,
});