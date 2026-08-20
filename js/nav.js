/* Mobile navigation drawer.
   Shared by every page; no-ops on desktop, where the toggle is display:none. */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var drawer = document.getElementById('mobile-drawer');
  var overlay = document.querySelector('.nav-overlay');
  if (!toggle || !drawer || !overlay) return;

  var closeBtn = drawer.querySelector('.nav-close');
  var scrollY = 0;

  function isOpen() {
    return drawer.classList.contains('is-open');
  }

  /* Locking the body with position:fixed rather than overflow:hidden is what
     actually holds on mobile Safari; the offset preserves the scroll position. */
  function lockScroll() {
    scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = -scrollY + 'px';
    document.body.style.width = '100%';
  }

  function unlockScroll() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollY);
  }

  function open() {
    lockScroll();
    drawer.classList.add('is-open');
    overlay.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    if (closeBtn) closeBtn.focus();
  }

  function close(returnFocus) {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    unlockScroll();
    if (returnFocus !== false) toggle.focus();
  }

  toggle.addEventListener('click', function () {
    if (isOpen()) close(); else open();
  });

  overlay.addEventListener('click', function () { close(); });
  if (closeBtn) closeBtn.addEventListener('click', function () { close(); });

  /* Selecting a destination closes the drawer. Focus is not returned to the
     toggle here because the browser is already navigating away. */
  Array.prototype.forEach.call(drawer.querySelectorAll('a'), function (link) {
    link.addEventListener('click', function () { close(false); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) close();
  });

  /* Keep Tab inside the drawer while it is acting as a modal. */
  drawer.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab' || !isOpen()) return;
    var items = drawer.querySelectorAll('a[href], button:not([disabled])');
    if (!items.length) return;
    var first = items[0];
    var last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  /* Rotating to desktop width hides the toggle, so drop the drawer with it. */
  window.addEventListener('resize', function () {
    if (isOpen() && window.innerWidth > 900) close(false);
  });
})();
