const formatDate = (date) => {
  const d = new Date(date);
  const month = d.getMonth(d);
  const day = d.getDate(d);
  const year = d.getFullYear(d);

  if (month.length < 2) {
    month = `0${month}`;
  }
  if (day.length < 2) {
    day = `0${day}`;
  }

  return [year, month, day].join("/");
};

export default formatDate;
