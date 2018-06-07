import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
    redux: service(),

    beforeModel(transition) {
        const savedPostsCount = get(this, 'redux').getState().savedPostCount;

        if (savedPostsCount < 1) {
            transition.abort();
            transition.redirect('/');
        }
    }
});
