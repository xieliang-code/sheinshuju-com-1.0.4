(() => {
  var e = function () {
    window.dispatchEvent(
      new CustomEvent('service-plugin-dock-event', {
        detail: { type: 'register', name: 'geekbi' },
      })
    );
  };
  setInterval(e, 1e3), e();
})();
