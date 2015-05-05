import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['soundcloud-controls'],

  volume: Ember.computed.alias('soundcloud.volume'),

  isPaused: Ember.computed.alias('soundcloud.paused'),

  actions: {
    togglePause: function () {
      var soundcloud = this.get('soundcloud');

      soundcloud.togglePause();
    }
  }
});
