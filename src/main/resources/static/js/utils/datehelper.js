
function GetFrom(to) {
    var [day, month, year] = to.split('-');
    var date = new Date(Date.UTC(year, month - 1, day));
    date.setUTCDate(date.getUTCDate() - 7);

    var yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();
    return dd + '-' + mm + '-' + yyyy;
}

function formatDateString(date) {
    var utcversion = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
        date.getUTCDate(), date.getUTCHours(),
        date.getUTCMinutes(), date.getUTCSeconds()));
    var yyyy = utcversion.getFullYear();
    let mm = utcversion.getMonth() + 1; // Months start at 0!
    let dd = utcversion.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return dd + '-' + mm + '-' + yyyy;

}

function getPreviousDay(date = new Date()) {
    var previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);

    return previous;
}

function getToday(date = new Date()) {
    var previous = new Date(date.getTime());
    previous.setDate(date.getDate());

    return previous;
}