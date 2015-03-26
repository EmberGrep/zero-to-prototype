import Ember from 'ember';

export default Ember.Service.extend({
  currentTrack: null,
  currentStream: null,
  volume: 75,
  paused: true,

  changeVolume: function () {
    var currentStream = this.get('currentStream');

    if (currentStream && currentStream.setVolume) {
      currentStream.setVolume(this.get('volume'));
    }
  }.observes('volume'),

  play: function () {
    if (this.get('currentStream')) {
      this.get('currentStream').destruct();
    }

    SC.stream('/tracks/' + this.get('currentTrack.id'), {
      volume: this.get('volume')
    }, (stream) => {
      this.set('currentStream', stream);

      stream.play();
      this.set('paused', false);
    });
  },

  togglePause: function () {
    this.toggleProperty('paused');
    this.get('currentStream').togglePause();
  }
});
