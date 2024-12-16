// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { thunk } from 'redux-thunk';

// import { composeWithDevTools } from 'redux-devtools-extension';

// import { todosReducers } from './reducers/todosReducer';
// import { tabReducer } from './reducers/tabReducer';
// // import { tabReducer } from './reducers/tabReducer';

// const reducer = combineReducers({
//     todos: todosReducers,
//     currentTab:tabReducer
    
// })









// const middleware = [thunk];

// const store = createStore(
//     reducer,
//     composeWithDevTools(applyMiddleware(...middleware))
// )

// export default store;


import { createStore, combineReducers, applyMiddleware } from 'redux';
// Import redux-thunk correctly
import thunk from 'redux-thunk'; 

import { todosReducers } from './reducers/todosReducer';
import { tabReducer } from './reducers/tabReducer';

const reducer = combineReducers({
    todos: todosReducers,
    currentTab: tabReducer,
});

const middleware = [thunk];

// Use composeWithDevTools in development
let composeEnhancers = (f) => f;

if (process.env.NODE_ENV === 'development') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    composeEnhancers = composeWithDevTools;
}

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;
