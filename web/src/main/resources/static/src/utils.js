export function getFormattedDate(date) {

    console.log('printing formatted date for date:', date);
    console.log('day=', date.getDay());
    console.log('month=', date.getMonth());
    var week = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
    var day = week[date.getDay()];
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    return day + ', ' + mm + '/' + dd;
}