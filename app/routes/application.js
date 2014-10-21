import Ember from 'ember';
import settings from 'baconbots/json/settings';

export default Ember.Route.extend({
	model: function() {
		return settings;
	}
});
