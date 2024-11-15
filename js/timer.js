function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById("deadline-timer")
        function updateClock() {
      var t = getTimeRemaining(endtime);
        if (t.total <= 0) {
        document.getElementById("countdown").className = "hidden";
        document.getElementById("deadline-message").className = "visible";
        clearInterval(timeinterval);
        return true;
      }
     clock.innerHTML = t.hours + ":" + ("0" + t.minutes).slice(-2) + ":" + ("0" + t.seconds).slice(-2);
        }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
    
  var deadline = new Date(Date.parse(new Date()) + 2 * 60 * 60 * 1000); 
  initializeClock("countdown", deadline);