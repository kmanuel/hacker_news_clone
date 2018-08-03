import { fetchStory } from '../actions';

export default ({ dispatch }) => (next) => (action) => {
    if (action.type === 'FETCH_NEWEST' && !action.payload.then) {
        const firstTen = action.payload.slice(0, 10);
        firstTen.forEach(storyId => {
            dispatch(fetchStory(storyId));
        });
    } else {
        next(action);
    }
}