// Set the date we're counting down to
var countDownDate = new Date("March 14, 2024 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementsByClassName("day-value")[0].textContent = days;
  document.getElementsByClassName("hour-value")[0].textContent = hours;
  document.getElementsByClassName("minute-value")[0].textContent = minutes;
  document.getElementsByClassName("second-value")[0].textContent = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementsByClassName("title")[0].textContent =
      "We've launched! 🎉";
  }
}, 1000);
