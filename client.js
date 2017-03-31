var socket = io();
var form = document.getElementById('form');
var teacher = document.getElementById('teacher');
var student  = document.getElementById('student');

function socketEmit(e) {
  e.preventDefault();
  var message = teacher.value;
  socket.emit('bb', message);
  teacher.value = '';
}

form.addEventListener('submit', function(e) {
  socketEmit(e);
});

function insert(e, string) {
  e.preventDefault();
  var elem, end, start, value;
  elem = e.target;
  start = elem.selectionStart;
  end = elem.selectionEnd;
  value = elem.value;
  elem.value = "" + (value.substring(0, start)) + string + (value.substring(end));
  elem.selectionStart = elem.selectionEnd = start + string.length();
}

teacher.addEventListener('keydown', function (e) {
  if (e.keyCode === 9) {
    insert(e, "  ");
  } else if (e.keyCode === 67 && e.altKey) {
    insert(e, "(cond ");
  } else if (e.keyCode === 68 && e.altKey) {
    insert(e, "(define ");
  } else if (e.keyCode === 69 && e.altKey) { // why not?
    insert(e, "(else ");
  } else if (e.keyCode === 76 && e.altKey) {
    insert(e, "(lambda ");
  } else if (e.keyCode === 13 && e.shiftKey) {
    e.preventDefault();
    socketEmit(e);
  }
});

function escape_html (string) {
  return string.replace(/[&'`"<>]/g, function(match) {
    return {
      '&': '&amp;',
      "'": '&#x27;',
      '`': '&#x60;',
      '"': '&quot;',
      '<': '&lt;',
      '>': '&gt;',
    }[match]
  });}

socket.on('bb', function(e) {
  student.innerHTML = '<pre><code>'+ escape_html(e) + '</code></pre>'});
