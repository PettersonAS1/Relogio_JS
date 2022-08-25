const hours = document.getElementById('hour');
const minutes = document.getElementById('minute');
const seconds = document.getElementById('second');

const watch = setInterval(function time(){
  let dateToday = new Date();
  let h = dateToday.getHours();
  let m = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  if (h < 10) h = '0' + h;
  if (m < 10) m = '0' + m;
  if (s < 10) s = '0' + s;

  hour.textContent = h;
  minute.textContent = m;
  second.textContent = s;
})