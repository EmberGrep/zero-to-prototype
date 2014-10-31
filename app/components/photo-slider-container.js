import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['photo-slider-container'],

	photos: [],
	startIndex: 0,

	currentSelectedIndex: 0,

	willInsertElement: function() {
		this.set('currentSelectedIndex', this.get('startIndex'));
	},

	actions: {
		previous: function() {
			if (this.get('currentSelectedIndex') > 0) {
				this.decrementProperty('currentSelectedIndex');
			} else {
				this.set('currentSelectedIndex', this.get('photos.length') - 1);
			}
		},

		next: function() {
			if (this.get('currentSelectedIndex') < this.get('photos.length') - 1) {
				this.incrementProperty('currentSelectedIndex');
			} else {
				this.set('currentSelectedIndex', 0);
			}
		}
	}
});
