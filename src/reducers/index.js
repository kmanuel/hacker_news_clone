import { combineReducers } from 'redux';
import storyReducer from './storyReducer';
import itemsReducer from './itemsReducer';

export default combineReducers({
    stories: storyReducer,
    items: itemsReducer
});