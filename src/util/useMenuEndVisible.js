import {useEffect, useState} from 'react';

const MENU_END_TARGET_ID = 'menu-order-cta';

export function useMenuEndVisible() {
    const [menuEndVisible, setMenuEndVisible] = useState(false);

    useEffect(() => {
        const target = document.getElementById(MENU_END_TARGET_ID);
        if (!target) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => setMenuEndVisible(entry.isIntersecting),
            {threshold: 0.15, rootMargin: '0px 0px -8% 0px'}
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, []);

    return menuEndVisible;
}

export {MENU_END_TARGET_ID};
