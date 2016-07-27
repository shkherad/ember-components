import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      { title: 'Favorite Things',
        items: [
          { content: "Keith Hulu"},
          { content: "Cats"},
          { content: "Dynamite"},
          { content: "Pokemon"},
          { content: "Cake"}
        ]
      },
      { title: 'Todo',
        items: [
          { content: "Learn Ember"},
          { content: "Master Ember"},
          { content: "Be One with Ember"},
          { content: "Catch all pokemon"}
        ]
      }
    ];
  }
});
