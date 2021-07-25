const pad = value => {
  return String(value).padStart(2, '0');
};

const padDays = value => {
  // переменная lengthForPad нужна для того, чтобы можно было автоматически подстраивать UI под количество дней
  const lengthForPad = (value + '').length;

  return String(value).padStart(lengthForPad, '0');
};

export const convertMs = ms => {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = padDays(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};
