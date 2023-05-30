
var countDownDate = new Date("MAY 30, 2023 23:59:59").getTime();

var countdownTimer = setInterval(function() {
  var now = new Date().getTime();
  var timeRemaining = countDownDate - now;
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hrs = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var secs = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days + "d";
  document.getElementById("hrs").innerHTML = hrs + "h";
  document.getElementById("mins").innerHTML = mins + "m";
  document.getElementById("secs").innerHTML = secs + "s";

  if (timeRemaining < 0) {
    clearInterval(countdownTimer);
    document.getElementById("timer").innerHTML = "Countdown finished!";
  }
}, 1000);
