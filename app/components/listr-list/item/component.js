import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['li'],
  classNameBindings: ['listItemDone'],
  listItemDone: false,
  actions: {
    toggleListItemStatus() {
      return this.toggleProperty('listItemDone');
    }
  }
});
