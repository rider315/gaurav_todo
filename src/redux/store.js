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
import thunk from 'redux-thunk'; // Fixed import of thunk
import { todosReducers } from './reducers/todosReducer';
import { tabReducer } from './reducers/tabReducer';

// Combine reducers
const reducer = combineReducers({
    todos: todosReducers,
    currentTab: tabReducer
});

// Setup middleware
const middleware = [thunk];

// Use composeWithDevTools only in development
let composeEnhancers = (f) => f;

if (process.env.NODE_ENV === 'development') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    composeEnhancers = composeWithDevTools;
}

// Create store
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;
