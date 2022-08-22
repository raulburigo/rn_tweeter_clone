export default (value: number) => {
  if (value < 10000) {
    return Number(value).toLocaleString();
  } else {
    return `${Number((value / 1000).toFixed(1)).toLocaleString()}k`;
  }
};
