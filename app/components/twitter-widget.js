/* global twttr */

import Ember from 'ember';

export default Ember.Component.extend({
	username: null,
	widgetId: null,

	placeholderUrl: function() {
		return 'https://twitter.com/' + this.get('username');
	}.property('username'),

	grabScripts: function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0],
			p = /^http:/.test(d.location) ? 'http' : 'https';
		if (!d.getElementById(id)) {
			js = d.createElement(s);
			js.id = id;
			js.src = p + "://platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js, fjs);
		}
	},

	importTwitterJs: function() {
		this.grabScripts(document, "script", "twitter-wjs");
	},

	loadWidgets: function() {
		if (typeof(twttr) !== 'undefined') {
			twttr.widgets.load();
		}
	},

	didInsertElement: function() {
		Ember.run.scheduleOnce('afterRender', this, this.importTwitterJs);
		Ember.run.scheduleOnce('afterRender', this, this.loadWidgets);
	}
});
