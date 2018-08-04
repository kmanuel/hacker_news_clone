import { combineReducers } from 'redux';
import storyReducer from './storyReducer';
import commentsReducer from './commentsReducer';
import itemsReducer from './itemsReducer';

export default combineReducers({
    stories: storyReducer,
    comments: commentsReducer,
    items: itemsReducer
});