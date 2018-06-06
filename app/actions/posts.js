export function fetchPosts(subreddit) {
    return function (dispatch, getState, { redditService }) {
        dispatch({
            type: 'FETCH_POSTS',
            payload: redditService.fetchPosts(subreddit)
        });
    }
}

export function savePost(post) {
    return function (dispatch, getState) {
        dispatch({
            type: 'SAVE_POST',
            payload: post
        });
    }
}