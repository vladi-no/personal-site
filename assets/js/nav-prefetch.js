(function () {
  if (
    window.HTMLScriptElement &&
    HTMLScriptElement.supports &&
    HTMLScriptElement.supports('speculationrules')
  ) {
    return;
  }

  function prefetch(link) {
    if (!link || link.dataset.prefetched === 'true') return;

    var url = link.href;
    if (!url || url.indexOf(location.origin) !== 0) return;

    var hint = document.createElement('link');
    hint.rel = 'prefetch';
    hint.href = url;
    hint.as = 'document';

    document.head.appendChild(hint);
    link.dataset.prefetched = 'true';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('nav a[href]');

    navLinks.forEach(function (link) {
      link.addEventListener('mouseenter', function () {
        prefetch(link);
      });

      link.addEventListener('focus', function () {
        prefetch(link);
      });
    });
  });
})();
