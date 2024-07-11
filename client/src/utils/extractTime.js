export function extractTime(dateString) {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${hours}:${minutes}`;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}


export function extractDate(bDateString) {
  // console.log(bDateString)
  const rawDate = new Date(bDateString)
  const formatter = Intl.DateTimeFormat("en-us", {
    dateStyle:"long"
  })

  const birthdayFormat = formatter.format(rawDate)
  return birthdayFormat
}