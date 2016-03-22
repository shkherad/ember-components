import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
      {
        title: 'Favorite Things',
        items: [
          { content: 'Keith Hulu' },
          { content: 'Cats' },
          { content: 'Sleep' },
        ]
      },
      { title: 'Todos',
        items: [
          { content: 'Recommend Mike' },
          { content: 'Learn Ember' },
        ]
      },
    ];
  }
});
