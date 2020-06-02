const MILLISECONDS_IN_MINUTE = 60 * 60;
const MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * 60;
const MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * 24;

const formatTime = (time) => {
  const dateNow = new Date().getTime();
  const date = new Date(time);

  const diff = dateNow - date;
  const dateDiff = new Date(diff);
  const minutesDiff = `0${dateDiff.getMinutes()}`.slice(-2);
  const hoursDiff = `0${dateDiff.getHours()}`.slice(-2);

  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  const year = date.getFullYear();
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const hours = `0${date.getHours()}`.slice(-2);

  let result = '';

  switch (true) {
    case diff < MILLISECONDS_IN_MINUTE:
      result = 'recently';
      break;
    case diff < MILLISECONDS_IN_HOUR:
      result = `${minutesDiff} minutes ago`;
      break;
    case diff < MILLISECONDS_IN_DAY:
      result = `${hoursDiff} hours ago`;
      break;
    case diff > MILLISECONDS_IN_DAY:
      result = `${day}.${month}.${year} ${hours}:${minutes}`;
      break;
    default:
      result = time;
      break;
  }

  return result;
}

export default formatTime;
