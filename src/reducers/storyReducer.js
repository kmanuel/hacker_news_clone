import { FETCH_NEWEST } from '../actions/types';

const defaultState = {
    newest: [],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_NEWEST:
            return {
                ...state,
                newest: action.payload
            };
        default:
            return state;
    }
}
