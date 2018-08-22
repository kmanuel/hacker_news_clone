import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from './middlewares/async';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

export default ({ children, initialState = {} })  => {
    let store = createStore(
        reducers,
        initialState,
        applyMiddleware(ReduxThunk, promiseMiddleware));

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
