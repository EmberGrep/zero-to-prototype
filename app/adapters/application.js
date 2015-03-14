import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',

  pathForType: function(type) {
    var decamelized = Ember.String.decamelize(type);
    decamelized = decamelized.replace('_', '-');

    return Ember.String.pluralize(decamelized);
  }
});
