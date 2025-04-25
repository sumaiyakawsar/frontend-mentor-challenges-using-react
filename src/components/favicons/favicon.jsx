import { useEffect } from 'react';

const useFavicon = (iconUrl) => {
    useEffect(() => {

        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.type = "image/x-icon";
        link.href = iconUrl;

        return () => { link.href = ""; };
    }, [iconUrl]);

};

export default useFavicon;