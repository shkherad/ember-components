import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
      {
        title: 'Favorite Things',
        items: [
          { content: 'Cats' },
          { content: 'Dogs' },
          { content: 'Cthulhu' },
          { content: 'Scotch' },
        ],
      }, {
        title: 'Todos',
        items: [
          { content: 'Learn JavaScript' },
          { content: 'Learn Ember' },
          { content: 'Learn Express' },
        ],
      },
    ];
  },
});
