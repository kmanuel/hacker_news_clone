import axios from 'axios';

export function fetchNewest () {
    return {
        type: 'FETCH_NEWEST',
        payload: axios.get('https://hacker-news.firebaseio.com/v0/topstories.json').then(res => res.data)
    };
}

export function fetchStory (id) {
    return {
        type: 'FETCH_STORY',
        payload: axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.data)
    }
}