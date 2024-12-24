(() => {
  var e;
  (e = localStorage.getItem('VerifyAuthToken')) &&
    chrome.storage.sync.set({ VerifyAuthToken: e });
})();
