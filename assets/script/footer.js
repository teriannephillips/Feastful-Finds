//get current day and renders to the footer
let now = dayjs();
let today = now.format();
  var date = today.split('T')[0];
  var footerDateEl = document.getElementById('date-id');
  footerDateEl.setAttribute ('class', 'footerlogo');
  footerDateEl.innerHTML = "&copy " + date;