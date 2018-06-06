import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Component.extend({
    tagName: 'li',
    model: null,

    reddit: service(),

    actions: {
        saveForLater(post) {
            get(this, 'reddit').saveForLater(post);
        }
    }
});
