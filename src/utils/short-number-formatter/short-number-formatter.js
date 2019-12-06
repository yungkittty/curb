const shortNumberFormatter = (number, decimals = 1, whitespace = false) => {
  const letters = ["K", "M", "B"];
  const onlyZeroRegex = "^[0]+$";
  let divideNumber = 1000;
  let i = 0;
  while (number >= divideNumber) {
    divideNumber *= 1000;
    i += 1;
  }
  if (i === 0) return number;
  const newNumber = ((number / divideNumber) * 1000).toString();
  const dotIndex = newNumber.indexOf(".") || newNumber.length - 1;
  const decimalsIndex = dotIndex + decimals;
  return `${newNumber.substr(
    0,
    // eslint-disable-next-line
    decimals === 0
      ? dotIndex
      : RegExp(onlyZeroRegex).exec(newNumber.substr(dotIndex + 1, decimalsIndex - 1))
      ? dotIndex
      : decimalsIndex + 1
  )}${whitespace ? " " : ""}${letters[i - 1]}`;
};

export default shortNumberFormatter;
