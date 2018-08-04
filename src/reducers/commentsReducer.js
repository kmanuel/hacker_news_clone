const defaultState = {
    comments: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'LOAD_COMMENTS':
            const comments = action.payload;
            return {comments: [...comments]};
        default:
            return state;
    }
}