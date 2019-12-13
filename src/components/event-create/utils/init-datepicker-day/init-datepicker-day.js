function initDatepickerDay(date) {
  let tmpDate = new Date(date);
  let i;
  const weekList = [];
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
  for (i = 0; i < 6; i += 1) {
    weekList[i] = tmpList.slice(i * 7, i * 7 + 7);
  }
  return weekList;
}

export default initDatepickerDay;
