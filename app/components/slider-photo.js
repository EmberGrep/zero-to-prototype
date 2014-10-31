import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'img',
	classNames: ['slider-photo'],
	attributeBindings: ['photoUrl:src'],
	classNameBindings: ['isSelected:selected'],

	photoUrl: null,
	photos: [],
	selectedIndex: null,

	index: function() {
		return this.get('photos').indexOf(this.get('photoUrl'));
	}.property('photos', 'photoUrl'),

	isSelected: function() {
		return this.get('index') === this.get('selectedIndex');
	}.property('index', 'selectedIndex')
});
