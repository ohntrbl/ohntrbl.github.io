const calendar = document.querySelector("h4#date");

function getCalendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleString("en-US", {month: "long"});
  const date = today.getDate();
  const day = today.toLocaleString("en-US", {weekday: "long"});
  calendar.innerText = `${day} ${date} ${month}, ${year}`;
}

getCalendar();