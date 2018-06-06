import fetch from 'fetch';

export default class RedditService {
    fetchPosts(subreddit) {
        return fetch(`https://www.reddit.com/r/${subreddit}.json`).then((response) => {
            return response.json();
        }).then((response) => {
            return response.data.children.map(p => p.data);
        });
    }
}
