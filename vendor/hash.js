if (location.hash && !!(window.history && history.pushState)) {
  if (location.hash.length) {
    history.replaceState({}, 'entry page', location.hash.substring(1));
  }
}
console.log('test');
