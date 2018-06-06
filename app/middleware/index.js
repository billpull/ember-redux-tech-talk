import thunk from 'redux-thunk';

import { RedditService } from 'redux-demo/services/reddit';

import arrayMiddleWare from 'redux-demo/middleware/array';
import promiesMiddleWare from 'redux-demo/middleware/promise';

const thunkMiddleware = thunk.withExtraArgument({
    redditService: new RedditService(),
});

export default [arrayMiddleWare, promiesMiddleWare];