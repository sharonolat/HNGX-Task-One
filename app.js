document.querySelector('body').addEventListener('DOMContentLoaded', init());

function init() {
  const moment = new Date();
  const dayOfTheWeek = document.querySelector('span[data-testid="currentDayOfTheWeek"]');
  const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

  dayOfTheWeek.innerHTML = moment.toLocaleDateString('en-US', { weekday: 'long' });
  currentUTCTime.innerHTML = moment.getTime();
}