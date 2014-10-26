import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['ticker-container'],

	didInsertElement: function() {
		var ticker = $('.ticker');

		$.ajax({
			url: 'http://api.chrisvalleskey.com/fillerama/get.php?count=50&format=json&show=futurama&jsoncallback=?',
			dataType: 'jsonp',
			success: function(result) {
				var string = '';
				result.db.forEach(function(sentence) {
					string += sentence.quote + ' ';
				});

				ticker.html(string);
				ticker.trigger('marquee');
			}
		});

		ticker.bind('marquee', function() {
			var tickerWidth = ticker.width();
			var parentWidth = ticker.parent().width();
			ticker.css({ right: -tickerWidth });

			ticker.animate({ right: parentWidth }, 105000, 'linear', function() {
				ticker.trigger('marquee');
			});
		});
	}
});
