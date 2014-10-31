import Ember from 'ember';
import InstagramData from 'baconbots/json/instagram';
import SliderPhotos from 'baconbots/json/slider-photo';

export default Ember.Controller.extend({
	instagramData: InstagramData,
	sliderPhotos: SliderPhotos,

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
