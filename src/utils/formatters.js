export const formatDate = (isoDate) => {
    if (!isoDate) return '';
    const d = new Date(isoDate);
    // Check if date is valid
    if (isNaN(d.getTime())) return 'Invalid Date';
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
};

export const formatTemp = (temp) => {
    return `${Math.round(temp)}°C`;
};
