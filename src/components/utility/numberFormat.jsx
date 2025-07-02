export const formatNumber = (num) => {
    if (typeof num === 'string') return num;
    if (num >= 10000) {
        return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'k';
    }
    return num;
};

export const formatWithCommas = (num) => {
    return num.toLocaleString();
};