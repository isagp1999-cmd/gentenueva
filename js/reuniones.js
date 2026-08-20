(function () {
  var weekMeetings = [
    { time: '18:00', dur: '90 min' },
    { time: '18:00', dur: '90 min' },
    { time: '18:00', dur: '90 min' },
    { time: '18:00', dur: '90 min' },
    { time: '18:00', dur: '90 min' },
    { time: '10:00', dur: '90 min' },
    null
  ];

  var tagsEl = document.getElementById('day-tags');
  var tags = tagsEl.querySelectorAll('.tag');
  var noMeetingEl = document.getElementById('no-meeting-text');
  var timeEl = document.getElementById('meeting-time');
  var nameEl = document.getElementById('meeting-name');
  var formatEl = document.getElementById('meeting-format');

  function render(day) {
    tags.forEach(function (tag) {
      var isSelected = Number(tag.dataset.day) === day;
      tag.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    });

    var wm = weekMeetings[day];
    var meeting = wm ? {
      time: wm.time,
      dur: wm.dur,
      name: 'Reunión Gente Nueva',
      format: 'Reunión abierta'
    } : null;

    if (meeting) {
      noMeetingEl.style.display = 'none';
      noMeetingEl.textContent = '';
    } else {
      noMeetingEl.style.display = 'block';
      noMeetingEl.textContent = day === 6
        ? 'El grupo está cerrado los domingos.'
        : 'No hay reuniones que coincidan con el filtro.';
    }

    timeEl.textContent = meeting ? meeting.time : '';
    nameEl.textContent = meeting ? meeting.name : '';
    formatEl.textContent = meeting ? (meeting.format + ' · ' + meeting.dur) : '';
  }

  tags.forEach(function (tag) {
    tag.addEventListener('click', function () {
      render(Number(tag.dataset.day));
    });
  });

  render(0);
})();
