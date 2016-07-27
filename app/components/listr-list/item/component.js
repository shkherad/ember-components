import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['div'],
  classNameBindings: ['isStrike:list-strike'],
  isStrike: false,

  actions: {
    toggleItem() {
      return this.toggleProperty('isStrike')
    }
  }
});
