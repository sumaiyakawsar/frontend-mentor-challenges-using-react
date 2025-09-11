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


export const formatCurrency = (value) => {
    if (value == null) return ""; // return empty string if no pledge
    return value.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
};
