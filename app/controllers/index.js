import Ember from 'ember';
import InstagramData from 'baconbots/json/instagram';

export default Ember.Controller.extend({
	instagramData: InstagramData,

	allNewsArticles: function() {
		return this.store.find('news-article');
	}.property(),

	recentNewsArticles: function() {
		return this.get('allNewsArticles')
			.sortBy('publishDate')
			.reverseObjects()
			.slice(0,3);
	}.property('allNewsArticles', 'allNewsArticles.length')
});
