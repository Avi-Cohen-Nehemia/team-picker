// import redux
import { createStore, applyMiddleware, compose } from "redux";

// import Redux components
import reducer from './reducer';
import initialState from './initialState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware())
);

export default store;