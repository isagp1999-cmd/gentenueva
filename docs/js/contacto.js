(function () {
  var form = document.getElementById('contact-form');
  var agree = document.getElementById('agree');
  var sendBtn = document.getElementById('send-btn');
  var toast = document.getElementById('sent-toast');
  var closeToast = document.getElementById('close-toast');

  agree.addEventListener('change', function () {
    sendBtn.disabled = !agree.checked;
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!agree.checked) return;
    toast.style.display = 'inline-flex';
  });

  closeToast.addEventListener('click', function () {
    toast.style.display = 'none';
  });
})();
