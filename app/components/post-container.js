import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';
import { connect } from 'ember-redux';

import { fetchPosts, savePost } from 'redux-demo/actions/posts';

const stateToComputed = (state) => {
  return {
    posts: state.posts,
    savedPosts: state.savedPosts,
    savedPostCount: state.savedPostCount
  };
};

const dispatchToActions = {
    fetchPosts,
    savePost
}

const PostListContainer = Component.extend({
  tagName: '',
  layout: hbs`
    {{yield posts savedPosts savedPostCount (action 'fetchPosts') (action 'savePost')}}
  `
});

export default connect(
  stateToComputed,
  dispatchToActions
)(PostListContainer);