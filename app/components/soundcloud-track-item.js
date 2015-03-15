import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['soundcloud-track-item'],
  classNameBindings: ['isSelected:selected'],
  tagName: 'li',

  currentTrack: null,
  track: null,

  isSelected: function () {
    return this.get('track.id') === this.get('currentTrack.id');
  }.property('currentTrack', 'track')
});
