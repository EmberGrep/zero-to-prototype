export function initialize(container, application) {
  SC.initialize({
    client_id: "72267d9eff1757b85ed193e3f0b8f93b"
  });

  application.inject('component', 'soundcloud', 'service:soundcloud-player');
}

export default {
  name: 'soundcloud',
  initialize: initialize
};
