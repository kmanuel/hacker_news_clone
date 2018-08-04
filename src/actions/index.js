import axios from 'axios';

const API_BASE = 'https://hacker-news.firebaseio.com/v0';

export function initialNewestFetch() {
    return dispatch => {
        const fetchNewestAction = fetchNewest();

        dispatch(fetchNewestAction);

        fetchNewestAction.payload
            .then(topStories => {
                topStories.slice(0, process.env.REACT_APP_PAGE_SIZE)
                    .forEach(storyId => dispatch(loadItem(storyId)))
            });
    }
}

export function loadStory(storyId) {
    return dispatch => {
        const item = loadItem(storyId);

        dispatch(item);

        item.payload.then(story => {
            story.kids.forEach(kidId => {
                dispatch(loadItem(kidId))
            });
        });
    }
}

const fetchNewest = () => {
    return {
        type: 'FETCH_NEWEST',
        payload: axios.get(`${API_BASE}/topstories.json`).then(res => res.data)
    };
};

export const loadItem = (itemId) => {
    return {
        type: 'LOAD_ITEM',
        payload: axios.get(`${API_BASE}/item/${itemId}.json`).then(res => res.data)
    };
};

