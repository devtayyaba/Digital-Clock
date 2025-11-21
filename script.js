const time = document.getElementById("time");
const timeFormat = document.getElementById("time_format");

const showTime = () => {
  let date = new Date();

  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();

  let format = hrs >= 12 ? "PM" : "AM";

  hrs = hrs % 12 || 12; // convert 24h -> 12h

  hrs = hrs < 10 ? `0${hrs}` : hrs;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;

  time.innerHTML = `${hrs} : ${mins} : ${secs}`;
  timeFormat.innerHTML = format;
};

document.addEventListener("DOMContentLoaded", () => {
  setInterval(showTime, 1000);
});
