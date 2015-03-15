import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['soundcloud-track-item'],
  classNameBindings: ['isSelected:selected'],
  tagName: 'li',

  currentTrack: Ember.computed.alias('soundcloud.currentTrack'),
  track: null,

  isSelected: function () {
    return this.get('track.id') === this.get('currentTrack.id');
  }.property('currentTrack', 'track'),

  click: function () {
    var soundcloud = this.get('soundcloud');

    if (this.get('isSelected')) {
      return soundcloud.togglePause();
    }

    soundcloud.set('currentTrack', this.get('track'));
    soundcloud.play();
  }
});
