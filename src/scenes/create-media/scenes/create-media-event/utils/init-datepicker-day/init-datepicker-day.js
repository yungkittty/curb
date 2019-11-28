function initDatepickerDay(date) {
  let tmpDate = new Date(date);
  const tmpList = [];

  while (tmpDate.getMonth() === date.getMonth()) {
    tmpDate.setDate(tmpDate.getDate() - 1);
    tmpList.unshift(new Date(tmpDate));
  }
  while (tmpDate.getDay() !== 1) {
    tmpDate.setDate(tmpDate.getDate() - 1);
    tmpList.unshift(new Date(tmpDate));
  }
  tmpDate = new Date(date);
  while (tmpList.length < 42) {
    tmpList.push(new Date(tmpDate));
    tmpDate.setDate(tmpDate.getDate() + 1);
  }
  return tmpList;
}

export default initDatepickerDay;
