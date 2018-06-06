import Component from '@ember/component';

export default Component.extend({
    posts: null,
    subreddit: '',

    actions: {
        submit(subreddit) {
            get(this, 'reddit')
                .fetchPosts(subreddit)
                .then((posts) => set(this, 'posts', posts));
        }
    }
});
