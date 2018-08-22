import { LOAD_ITEM } from '../actions/types';

const defaultState = {
    story: {},
    comment: {}
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case LOAD_ITEM:
            const item = action.payload;
            return {
                ...state,
                [item.type]: {
                    ...state[item.type],
                    [item.id]: item
                }
            };
        default:
            return state;
    }

}
