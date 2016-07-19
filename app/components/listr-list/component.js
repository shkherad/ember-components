import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['div'],
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: true,
  actions: {
    toggleListDetail () {
      return this.toggleProperty('listDetailHidden');
    },
  },
});
