import React, {useEffect, useState} from 'react';
import './FloatingOrderButton.css';
import OrderCartIcon from './OrderCartIcon';
import {languageTranslate} from '../../util/utils';
import {useMenuEndVisible} from '../../util/useMenuEndVisible';

const ORDER_URL = 'https://order.rotibotilaval.com/';
const SCROLL_THRESHOLD = 120;

const FloatingOrderButton = () => {
    const label = languageTranslate('Commander en ligne / Order Online');
    const menuEndVisible = useMenuEndVisible();
    const [scrolledPastTop, setScrolledPastTop] = useState(false);
    const visible = scrolledPastTop && !menuEndVisible;

    useEffect(() => {
        const onScroll = () => {
            setScrolledPastTop(window.scrollY > SCROLL_THRESHOLD);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`floating-order-btn${visible ? '' : ' floating-order-btn--hidden'}`}
            aria-label={label}
            aria-hidden={!visible}
            tabIndex={visible ? 0 : -1}
        >
            <span className="floating-order-btn__ring" aria-hidden="true"/>
            <span className="floating-order-btn__inner">
                <OrderCartIcon className="floating-order-btn__icon"/>
                <span className="floating-order-btn__text">{label}</span>
            </span>
        </a>
    );
};

export default FloatingOrderButton;
