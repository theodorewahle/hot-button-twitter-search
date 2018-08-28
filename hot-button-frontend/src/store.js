import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

import tweetsReducer from './redux/tweets/Reducer.js';

const reducers = combineReducers({
  tweets: tweetsReducer,

});

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default store
