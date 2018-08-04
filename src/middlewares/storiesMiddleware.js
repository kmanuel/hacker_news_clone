import { fetchStory } from '../actions';

export default ({ dispatch, getState }) => (next) => (action) => {
    if (action.type === 'LOAD_ITEMS') {
        const newest = getState().stories.newest;

        const { fromIdx, toIdx } = action.payload;
        const itemsToLoad = newest.slice(fromIdx, toIdx);
        itemsToLoad.forEach(storyId => {
            dispatch(fetchStory(storyId));
        });
    } else {
        next(action);
    }
}