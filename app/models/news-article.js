import DS from 'ember-data';
import FixtureData from 'baconbots/fixtures/news-article';

var NewsArticle = DS.Model.extend({
	title: DS.attr('string'),
	body: DS.attr('string'),
	publishDate: DS.attr(),

	abstract: function() {
		return this.get('body')
			.match(/\S+/g)
			.splice(0,10)
			.join(' ') +
			'...';
	}.property('body')
});

NewsArticle.reopenClass({
	FIXTURES: FixtureData
});

export default NewsArticle;
