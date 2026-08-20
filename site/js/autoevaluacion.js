(function () {
  var form = document.getElementById('auto-form');
  var quizView = document.getElementById('auto-quiz');
  var resultView = document.getElementById('auto-result');
  var yesCountEl = document.getElementById('yes-count');
  var noCountEl = document.getElementById('no-count');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var yes = 0, no = 0;
    for (var i = 0; i < 12; i++) {
      var checked = form.querySelector('input[name="auto-q' + i + '"]:checked');
      if (checked) {
        if (checked.value === 'si') yes++;
        else no++;
      }
    }
    yesCountEl.textContent = yes;
    noCountEl.textContent = no;
    quizView.style.display = 'none';
    resultView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  });
})();
