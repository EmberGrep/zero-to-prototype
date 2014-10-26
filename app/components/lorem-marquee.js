import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['ticker-container'],

	tickerDiv: null,
	show: 'futurama',
	count: 50,
	animateSpeed: 105000,

	apiUrl: function() {
		return 'http://api.chrisvalleskey.com/fillerama/get.php?count=' +
			this.get('count') +
			'&format=json&show=' +
			this.get('show') +
			'&jsoncallback=?';
	}.property('show', 'count'),

	insertQuotes: function(result) {
		var string = '',
			ticker = this.get('tickerDiv');

		result.db.forEach(function(sentence) {
			string += sentence.quote + ' ';
		});

		ticker.html(string);
		ticker.trigger('marquee');
	},

	startMarquee: function() {
		var ticker = this.get('tickerDiv');

		var tickerWidth = ticker.width(),
			parentWidth = ticker.parent().width();

		ticker.css({ right: -tickerWidth });

		ticker.animate({ right: parentWidth }, this.get('animateSpeed'), 'linear', function() {
			ticker.trigger('marquee');
		});
	},

	didInsertElement: function() {
		var ticker = this.$('.ticker');
		this.set('tickerDiv', ticker);

		Ember.$.ajax({
			url: this.get('apiUrl'),
			dataType: 'jsonp',
			success: this.insertQuotes.bind(this)
		});

		ticker.bind('marquee', this.startMarquee.bind(this));
	}
});
