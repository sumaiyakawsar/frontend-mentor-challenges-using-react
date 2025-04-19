import { useEffect } from 'react';

const useFavicon = (iconUrl) => {
    useEffect(() => {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'icon';
        link.href = iconUrl;
        document.getElementsByTagName('head')[0].appendChild(link);
    }, [iconUrl]);
};

export default useFavicon;