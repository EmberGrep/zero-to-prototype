import Ember from 'ember';

export default Ember.ArrayController.extend({
	sortProperties: ['publishDate'],

	sortAscending: false
});
