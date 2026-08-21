/* Contact form → Formspree.
   Submitted with fetch so the reader stays on the page; the form keeps its
   action/method so it still posts normally if JavaScript never runs. */
(function () {
  var form = document.getElementById('contact-form');
  var agree = document.getElementById('agree');
  var sendBtn = document.getElementById('send-btn');
  var sentToast = document.getElementById('sent-toast');
  var errorToast = document.getElementById('error-toast');
  var closeToast = document.getElementById('close-toast');
  var closeError = document.getElementById('close-error');
  if (!form || !agree || !sendBtn) return;

  var SEND_LABEL = sendBtn.textContent;

  function hide(el) { if (el) el.style.display = 'none'; }
  function show(el) { if (el) el.style.display = 'inline-flex'; }

  agree.addEventListener('change', function () {
    sendBtn.disabled = !agree.checked;
  });

  if (closeToast) closeToast.addEventListener('click', function () { hide(sentToast); });
  if (closeError) closeError.addEventListener('click', function () { hide(errorToast); });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!agree.checked) return;
    if (!form.checkValidity()) { form.reportValidity(); return; }

    hide(sentToast);
    hide(errorToast);
    sendBtn.disabled = true;
    sendBtn.textContent = 'Enviando…';

    /* Accept: application/json makes Formspree answer with JSON instead of
       redirecting to its own thank-you page. */
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then(function (res) {
        if (!res.ok) throw new Error('Formspree respondió ' + res.status);
        form.reset();
        show(sentToast);
      })
      .catch(function () {
        show(errorToast);
      })
      .then(function () {
        sendBtn.textContent = SEND_LABEL;
        /* reset() clears the checkbox, so the button stays gated by it. */
        sendBtn.disabled = !agree.checked;
      });
  });
})();
