const defaultState = {};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'NEW_ITEM':
            console.log('loaded new item', action.payload);
            const item = action.payload;
            return {
                ...defaultState,
                [item.id]: item
            };
        default:
            return state;
    }

}