import axios from 'axios';

export function fetchNewest() {
    return {
        type: 'FETCH_NEWEST',
        payload: axios.get('https://hacker-news.firebaseio.com/v0/topstories.json').then(res => res.data)
    };
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
        payload: axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.data)
    };
}

export function fetchStory(id) {
    return {
        type: 'FETCH_STORY',
        payload: axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.data)
    }
}

export function loadComments(storyId) {
    const comments = axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`).then(res => res.data)
        .then(story => story.kids)
        .then(comments => Promise.all(comments.map(c => axios.get(`https://hacker-news.firebaseio.com/v0/item/${c}.json`).then(res => res.data))));

    return {
        type: 'LOAD_COMMENTS',
        payload: comments
    };
}