import { LOGIN, LOGOUT } from '../actions/types';

const defaultState = {
    user: {
        isLoggedIn: false
    },
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                user: {
                    name: action.payload,
                    isLoggedIn: true
                }
            };
        case LOGOUT:
            return defaultState;
        default:
            return state;
    }

}
