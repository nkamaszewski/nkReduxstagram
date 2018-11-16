import { createStore, compose } from 'redux';
import { syncHistoryWithRedux } from 'react-router-redux';
import { browserHistory } from 'react-router';

import { rootReducer } from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

const defaultStore = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultStore);

export const history = syncHistoryWithRedux(browserHistory, store);

export default store;
