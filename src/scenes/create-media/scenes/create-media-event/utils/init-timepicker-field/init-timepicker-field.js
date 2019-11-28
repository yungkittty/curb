function initDatepickerField(date, limit, prevValue) {
  const value = Number(date);

  if (value < limit) {
    if (value < 10) return `0${value}`;
    return value.toString();
  }
  return prevValue;
}

export default initDatepickerField;
