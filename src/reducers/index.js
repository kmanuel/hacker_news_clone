import { combineReducers } from 'redux';
import storyReducer from './storyReducer';
import itemsReducer from './itemsReducer';
import authReducer from './authReducer';

export default combineReducers({
    stories: storyReducer,
    items: itemsReducer,
    auth: authReducer
});
