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
import thunk from 'redux-thunk';  // Corrected import for redux-thunk

import { composeWithDevTools } from 'redux-devtools-extension';

import { todosReducers } from './reducers/todosReducer';
import { tabReducer } from './reducers/tabReducer';

// Combine reducers
const reducer = combineReducers({
    todos: todosReducers,
    currentTab: tabReducer
});

// Middleware setup
const middleware = [thunk];

// Create store with devtools and middleware
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
