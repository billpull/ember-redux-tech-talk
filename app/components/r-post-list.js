import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';

export default Component.extend({
    posts: [],
    subreddit: '',

    reddit: service(),

    actions: {
        submit(subreddit) {
            get(this, 'reddit')
                .fetchPosts(subreddit)
                .then((posts) => set(this, 'posts', posts));
        }
    }
});
