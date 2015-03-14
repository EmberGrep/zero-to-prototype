export function initialize(/* container, application */) {
  SC.initialize({
    client_id: "72267d9eff1757b85ed193e3f0b8f93b"
  });

  SC.stream("/tracks/28040884", function(sound){
    sound.play();
  });
}

export default {
  name: 'soundcloud',
  initialize: initialize
};
