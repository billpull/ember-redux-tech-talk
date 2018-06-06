import Service from '@ember/service';
import { get, set } from '@ember/object';

import fetch from 'fetch';

export default Service.extend({
    savedPosts: null,

    fetchPosts(subreddit) {
        return fetch(`https://www.reddit.com/r/${subreddit}.json`).then((response) => {
            return response.json();
        }).then((response) => {
            return response.data.children.map(p => p.data);
        });
    },

    saveForLater(post) {
        get(this, 'savedPosts').pushObject(post);
    },

    init() {
        this._super(...arguments);
        set(this, 'savedPosts', []);
    }
});
