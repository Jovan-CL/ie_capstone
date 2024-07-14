function extractDate(dateString) {
  // console.log(dateString);
  const rawDate = new Date(dateString);
  // const month = rawDate.getMonth();
  // const month = rawDate.getMonth()
  // const year = rawDate.getYear();
  const formatter = Intl.DateTimeFormat("en-us", {
    dateStyle: "long",
  });
  // console.log(rawDate);
  const birthdayFormat = formatter.format(rawDate);
  return birthdayFormat;
}

export default extractDate;
