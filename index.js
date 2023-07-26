
function getCurrentDate() {
    return new Date();
}

function isValidDate(date) {
    return !isNaN(date.getTime());
}

function parseDate(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day); // Note: months are 0-based in Date objects
}


function formatDate(date, format) {
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const formatTokens = {
        'MMMM': date.toLocaleString(undefined, { month: 'long' }),
        'MMM': monthNames[date.getMonth()],
        'MM': String(date.getMonth() + 1).padStart(2, '0'),
        'M': String(date.getMonth() + 1),
        'DDDD': date.toLocaleString(undefined, { weekday: 'long' }),
        'DD': String(date.getDate()).padStart(2, '0'),
        'Do': String(date.getDate()) + getOrdinalSuffix(String(date.getDate())),
        'D': String(date.getDate()),
        'YYYY': date.getFullYear(),
        'YY': date.getFullYear().toString().slice(-2),
        'hh': String(date.getHours()).padStart(2, '0'),
        'h': String(date.getHours()),
        'mm': String(date.getMinutes()).padStart(2, '0'),
        'm': String(date.getMinutes()),
        'ss': String(date.getSeconds()).padStart(2, '0'),
        's': String(date.getSeconds()),
        'a': date.toLocaleString(undefined, { hour12: true, hour: 'numeric' }).match(/\s(.*)$/)[1],
    };

    function getOrdinalSuffix(day) {
        if (day >= 11 && day <= 13) {
            return 'th';
        }
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }

    const regex = new RegExp(Object.keys(formatTokens).join('|'), 'g');
    const formattedString = format.replace(regex, (match) => formatTokens[match]);
    return formattedString;
}


function formatDatefun() {
    const date = new Date('2023-07-03');
    const formattedDate = formatDate(date, 'MMM Do, YYYY');
    console.log(formattedDate)
};

function addDays(date, daysToAdd) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + daysToAdd);
    return newDate;
}

function subtractDays(date, daysToSubtract) {
    return addDays(date, -daysToSubtract);
}

function getStartOfDay(date) {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
}

function getEndOfDay(date) {
    const newDate = new Date(date);
    newDate.setHours(23, 59, 59, 999);
    return newDate;
}

function diffInDays(start, end) {
    const oneDayInMillis = 24 * 60 * 60 * 1000;
    const startTimestamp = start.getTime();
    const endTimestamp = end.getTime();
    return Math.round((endTimestamp - startTimestamp) / oneDayInMillis);
}

function isBeforeDate(date1, date2) {
    return date1.getTime() < date2.getTime();
}

function isAfterDate(date1, date2) {
    return date1.getTime() > date2.getTime();
}

function isSameDate(date1, date2) {
    return date1.toISOString() === date2.toISOString();
}

function isSameOrBeforeDate(date1, date2) {
    return date1.toISOString() <= date2.toISOString();
}

function isSameOrAfterDate(date1, date2) {
    return date1.toISOString() >= date2.toISOString();
}

function cloneDate(date) {
    return new Date(date);
}

function getUnixTimestamp(date) {
    return Math.floor(date.getTime() / 1000);
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
function humanReadableFormat(date) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
    };
    return date.toLocaleString(undefined, options);
}

function getStartOfWeek(date) {
    const newDate = new Date(date);
    const dayOfWeek = newDate.getDay();
    const diff = newDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    newDate.setDate(diff);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
}

function getEndOfWeek(date) {
    const newDate = getStartOfWeek(date);
    newDate.setDate(newDate.getDate() + 6);
    newDate.setHours(23, 59, 59, 999);
    return newDate;
}
function toDateObject(dateStr) {
    return new Date(dateStr);
}

// Function to convert a local date to UTC date
function convertLocalToUTC(date) {
    const timezoneOffsetInMinutes = date.getTimezoneOffset();
    return new Date(date.getTime() + timezoneOffsetInMinutes * 60 * 1000);
}

// Function to convert a UTC date to local date
function convertUTCToLocal(utcDate) {
    const timezoneOffsetInMinutes = utcDate.getTimezoneOffset();
    return new Date(utcDate.getTime() - timezoneOffsetInMinutes * 60 * 1000);
}

function getCurrentDayTimeYear() {
    const currentDate = new Date();

    const currentDay = currentDate.getDate(); // Get the current day of the month (1-31)
    const currentMonth = currentDate.getMonth() + 1; // Get the current month (0-based, so we add 1 to get the real month value)
    const currentYear = currentDate.getFullYear(); // Get the current year (e.g., 2023)

    const currentHours = currentDate.getHours(); // Get the current hour (0-23)
    const currentMinutes = currentDate.getMinutes(); // Get the current minute (0-59)
    const currentSeconds = currentDate.getSeconds(); // Get the current second (0-59)
    const currentMilliseconds = currentDate.getMilliseconds(); // Get the current millisecond (0-999)

    return {
        day: currentDay,
        month: currentMonth,
        year: currentYear,
        hours: currentHours,
        minutes: currentMinutes,
        seconds: currentSeconds,
        milliseconds: currentMilliseconds,
    };
}

function calculateAge(dateOfBirth) {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--; // If the birth month has not occurred yet this year, reduce the age by 1
    }

    return age;
}

formatDatefun()

// Export all the utility functions as a module
module.exports = {
    getCurrentDate,
    isValidDate,
    parseDate,
    formatDate,
    addDays,
    subtractDays,
    getStartOfDay,
    getEndOfDay,
    diffInDays,
    isBeforeDate,
    isAfterDate,
    isSameDate,
    isSameOrBeforeDate,
    isSameOrAfterDate,
    cloneDate,
    getUnixTimestamp,
    isLeapYear,
    getDaysInMonth,
    humanReadableFormat,
    getStartOfWeek,
    getEndOfWeek,
    toDateObject,
    convertLocalToUTC,
    convertUTCToLocal,
    getCurrentDayTimeYear,
    calculateAge
};