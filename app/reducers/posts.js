import _ from 'lodash';

const initialState = {
    posts: [],
    savedPosts: [],
    savedPostCount: 0,
};
  
export default ((state, action) => {
    if (action.type === 'FETCH_POSTS') {
        return Object.assign({}, state, {
            posts: _.uniq(action.payload)
        });
    }
    if (action.type === 'SAVE_POST') {
        const savedPosts = state.savedPosts;
        savedPosts.push(action.payload);
        const uniqPosts = _.uniq(savedPosts);

        return Object.assign({}, state, {
            savedPosts: uniqPosts,
            savedPostCount: uniqPosts.length
        });
    }
    return state || initialState;
});