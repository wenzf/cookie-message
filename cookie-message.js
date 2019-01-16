// remove notification
const removeNotification = () => {
  const getCookieBox = document.getElementsByClassName('msg-box')[0];
  getCookieBox.style.display = 'none';
  // if cookie should be installed after 'ok' was clicked, add the code in this block
};

// make notification visible
const makeNotification = () => {
  const getCookieBox = document.getElementsByClassName('msg-box')[0];
  const getCookieBtn = document.querySelectorAll('.msg-box button')[0];
  getCookieBox.style.display = 'block';
  getCookieBtn.addEventListener('click', removeNotification, false, true);
};

// check if 'cookie_exp' exists in localStorage, if it's up to date; show / hide notification
const checkStorage = () => {
  const dateToday = new Date();
  let timeString = dateToday.getTime();
  const expString = localStorage.getItem('cookie_exp');
  if (timeString) {
     if (timeString > expString) {
      timeString += (30 * 24 * 60 * 60 * 1000); // notification will be shown again after 30 days
      localStorage.setItem('cookie_exp', timeString);
      makeNotification();
    }
  } else {
    timeString += (30 * 24 * 60 * 60 * 1000);
    localStorage.setItem('cookie_exp', timeString);
    makeNotification();
  }
};

checkStorage();
