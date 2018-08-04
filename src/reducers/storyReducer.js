const defaultState = {
    newest: [],
    resolved: [],
    activeStory: null
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
        case 'FETCH_ACTIVE_STORY':
            const activeStory = action.payload;
            return {
                ...state,
                activeStory
            };
        default:
            return state;
    }
}