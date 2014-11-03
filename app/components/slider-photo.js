import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'img',
	classNames: ['slider-photo'],
	attributeBindings: ['photoUrl:src'],
	classNameBindings: ['isSelected:selected', 'isAfter:after', 'isBefore:before'],

	photoUrl: null,
	photos: [],
	selectedIndex: null,
	canSlideOut: true,

	index: function() {
		return this.get('photos').indexOf(this.get('photoUrl'));
	}.property('photos', 'photoUrl'),

	isSelected: function() {
		return this.get('index') === this.get('selectedIndex');
	}.property('index', 'selectedIndex'),

	isBefore: function() {
		return this.get('index') < this.get('selectedIndex');
	}.property('index', 'selectedIndex'),

	isAfter: function() {
		return this.get('index') > this.get('selectedIndex');
	}.property('index', 'selectedIndex'),

	hasMovedBefore: function() {
		if (this.get('isBefore') && this.get('canSlideOut')) {
			this.$().velocity({left: '-1000px'});
			this.set('canSlideOut', false);
		}
	}.observes('isBefore'),

	hasMovedAfter: function() {
		if (this.get('isAfter') && this.get('canSlideOut')) {
			this.$().velocity({left: '1000px'});
			this.set('canSlideOut', false);
		}
	}.observes('isAfter'),

	hasMovedSelected: function() {
		if (this.get('isSelected')) {
			this.$().velocity({left: 0});
			this.set('canSlideOut', true);
		}
	}.observes('isSelected')
});
