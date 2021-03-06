import thunk from 'redux-thunk';

import RedditService from 'redux-demo/services/reddit';

import arrayMiddleWare from 'redux-demo/middleware/array';
import promiseMiddleWare from 'redux-demo/middleware/promise';

const thunkMiddleware = thunk.withExtraArgument({
    redditService: new RedditService(),
});

export default [arrayMiddleWare, promiseMiddleWare, thunkMiddleware];