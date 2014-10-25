import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('music');

	this.resource('news', function() {
		this.route('show', {
			path: '/:news_article_id'
		});
	});
});

export default Router;
