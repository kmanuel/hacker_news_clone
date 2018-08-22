import { LOGIN, LOGOUT } from './types';

export function login(username) {
    console.log('logging in: ', username);
    return {
        type: LOGIN,
        payload: username
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}
