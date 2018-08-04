import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import storiesMiddleware from './middlewares/storiesMiddleware';
import reducers from './reducers';

export default ({ children, initialState = {} })  => {
    let store = createStore(
        reducers,
        initialState,
        applyMiddleware(ReduxThunk, promiseMiddleware, storiesMiddleware));

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}