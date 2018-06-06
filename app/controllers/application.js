import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Controller.extend({
    reddit: service(),
    savedPosts: alias('reddit.savedPosts'),
    savedPostCount: alias('reddit.savedPosts.length')
});
