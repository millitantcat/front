function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(endtime) {
    let clock = document.querySelector('.clock-counter');
    let daysSpan = clock.querySelector('.days-counter');
    let hoursSpan = clock.querySelector('.hours-counter');
    let minutesSpan = clock.querySelector('.minutes-counter');
    let secondsSpan = clock.querySelector('.seconds-counter');
  
    function updateClock() {
      let t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
  }
  
  let newYearDate = new Date(new Date().getFullYear() + 1, 0, 10);
  initializeClock(newYearDate);