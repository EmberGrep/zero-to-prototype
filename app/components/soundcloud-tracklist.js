import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['soundcloud-tracklist'],

  playlistId: null,
  playlistUrl: function () {
    return '/playlists/' + this.get('playlistId');
  }.property('playlistId'),

  tracks: [],
  currentTrack: null,

  setPlaylistData: function (playlist) {
    var tracks = playlist.tracks;

    this.set('tracks', tracks);
    this.set('currentTrack', tracks[0]);
  },

  playCurrentTrack: function () {
    SC.stream('/tracks/' + this.get('currentTrack.id'), function(sound){
    sound.play();
  });
  }.observes('currentTrack'),

  loadPlaylistData: function () {
    SC.get(this.get('playlistUrl'), this.setPlaylistData.bind(this));
  }.on('didInsertElement')
});
