export default class DateUtil {
  constructor(fireStoreDate) {
    // eslint-disable-next-line no-underscore-dangle
    this.date = new Date(fireStoreDate._seconds * 1000);
  }

  formatDate(format) {
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
    const day = this.date.getDate();
    const monthIndex = this.date.getMonth();
    const year = this.date.getFullYear();
    switch (format) {
      case 'mm/dd/yyyy':
        return `${monthIndex + 1}/${day}/${year}`;
      default:
        return `${monthNames[monthIndex]}/${day}/${year}`;
    }
  }
}
