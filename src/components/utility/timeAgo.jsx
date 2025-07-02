export const timeAgo = (timestamp) => {
    const now = Date.now();

    let time;
    if (typeof timestamp === 'string') {
        time = new Date(timestamp).getTime();
    } else if (typeof timestamp === 'number') {
        time = timestamp;
    } else {
        return 'Unknown time';
    }

    const diffInSeconds = Math.floor((now - time) / 1000);



    const format = (value, unit) =>
        `${value} ${unit}${value !== 1 ? 's' : ''} ago`;

    const secondsInMinute = 60;
    const secondsInHour = 60 * secondsInMinute;
    const secondsInDay = 24 * secondsInHour;
    const secondsInWeek = 7 * secondsInDay;
    const secondsInMonth = 30 * secondsInDay; // Approximate month
    const secondsInYear = 365 * secondsInDay; // Approximate year

    if (diffInSeconds < secondsInMinute) return 'Just now';
    if (diffInSeconds < secondsInHour) return format(Math.floor(diffInSeconds / secondsInMinute), 'minute');
    if (diffInSeconds < secondsInDay) return format(Math.floor(diffInSeconds / secondsInHour), 'hour');
    if (diffInSeconds < secondsInWeek) return format(Math.floor(diffInSeconds / secondsInDay), 'day');
    if (diffInSeconds < secondsInMonth) return format(Math.floor(diffInSeconds / secondsInWeek), 'week');
    if (diffInSeconds < secondsInYear) return format(Math.floor(diffInSeconds / secondsInMonth), 'month');

    return format(Math.floor(diffInSeconds / secondsInYear), 'year');
};
