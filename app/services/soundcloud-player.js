import Ember from 'ember';

export default Ember.Service.extend({
  currentTrack: null,
  currentStream: null,

  play: function () {
    if (this.get('currentStream')) {
      this.get('currentStream').destruct();
    }

    SC.stream('/tracks/' + this.get('currentTrack.id'), (stream) => {
      this.set('currentStream', stream);

      stream.play();
    });
  },

  togglePause: function () {
    this.get('currentStream').togglePause();
  }
});
