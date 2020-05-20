const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November', 
  'December',
];

const monthAbbreviations = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function getMonthDayString(date) {
  let dateSuffix = 'th';
  switch (date.getUTCDate()) {
    case 1:
    case 21:
    case 31:
      dateSuffix = 'st';
      break;
    case 2:
    case 22:
      dateSuffix = 'nd';
      break;
    case 3:
    case 23:
      dateSuffix = 'rd';
      break;
  }
  return `${monthAbbreviations[date.getUTCMonth()]}` + 
             ` ${date.getUTCDate()}${dateSuffix}`;
}