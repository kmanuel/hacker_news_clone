const defaultState = {
    newest: [],
    resolved: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'FETCH_NEWEST':
            return {
                ...state,
                newest: action.payload
            };
        case 'FETCH_STORY':
            return {
                ...state,
                resolved: [...state.resolved, action.payload]
            };
        default:
            return state;
    }
}