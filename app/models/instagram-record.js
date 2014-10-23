import Ember from 'ember';

export default Ember.Object.extend({
	imageUrl: null,
	caption: null,
	username: null,
	linkUrl: null,
	date: null,

	relativeImageUrl: function() {
		return this.replaceProtocolToRelative(this.get('imageUrl'));
	}.property('imageUrl'),

	relativeLinkUrl: function() {
		return this.replaceProtocolToRelative(this.get('linkUrl'));
	}.property('linkUrl'),

	replaceProtocolToRelative: function(url) {
		return url.replace(/^.*:\/\//, '//');
	}
});
