import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['soundcloud-tracklist'],
  autoplay: false,

  playlistId: null,
  playlistUrl: function () {
    return '/playlists/' + this.get('playlistId');
  }.property('playlistId'),

  tracks: [],

  setPlaylistData: function (playlist) {
    var tracks = playlist.tracks;

    this.set('tracks', tracks);

    if (this.get('autoplay')) {
      this.playTrack(tracks[0]);
    }
  },

  playTrack: function (track) {
    var soundcloud = this.get('soundcloud');

    soundcloud.set('currentTrack', track);
    soundcloud.play();
  },

  loadPlaylistData: function () {
    SC.get(this.get('playlistUrl'), this.setPlaylistData.bind(this));
  }.on('didInsertElement')
});
