import axios from 'axios';

const API_BASE = 'https://hacker-news.firebaseio.com/v0';

export function fetchNewest() {
    return dispatch => {
        const topStoriesPromise = axios.get(`${API_BASE}/topstories.json`)
            .then(res => res.data);

        dispatch({
            type: 'FETCH_NEWEST',
            payload: topStoriesPromise
        });

        topStoriesPromise
            .then(() => {
                dispatch(loadItems(0, process.env.REACT_APP_PAGE_SIZE));
            });

    }
}

export function loadItems(fromIdx, toIdx) {
    return {
        type: 'LOAD_ITEMS',
        payload: { fromIdx, toIdx }
    }
}

export function fetchActiveStory(id) {
    return {
        type: 'FETCH_ACTIVE_STORY',
        payload: axios.get(`${API_BASE}/item/${id}.json`).then(res => res.data)
    };
}

export function fetchStory(id) {
    return {
        type: 'FETCH_STORY',
        payload: axios.get(`${API_BASE}/item/${id}.json`).then(res => res.data)
    }
}

export function loadComments(storyId) {
    const comments = axios.get(`${API_BASE}/item/${storyId}.json`).then(res => res.data)
        .then(story => story.kids)
        .then(comments => Promise.all(comments.map(c => axios.get(`${API_BASE}/item/${c}.json`).then(res => res.data))));

    return {
        type: 'LOAD_COMMENTS',
        payload: comments
    };
}