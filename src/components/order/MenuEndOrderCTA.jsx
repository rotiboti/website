import React from 'react';
import './MenuEndOrderCTA.css';
import OrderCartIcon from './OrderCartIcon';
import {languageTranslate} from '../../util/utils';
import {MENU_END_TARGET_ID} from '../../util/useMenuEndVisible';

const ORDER_URL = 'https://order.rotibotilaval.com/';

const MenuEndOrderCTA = () => {
    const orderLabel = languageTranslate('Commander en ligne / Order Online');

    return (
        <section id={MENU_END_TARGET_ID} className="menu-end-order" aria-label={orderLabel}>
            <div className="menu-end-order__divider" aria-hidden="true"/>
            <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="menu-end-order__btn"
            >
                <span className="menu-end-order__btn-ring" aria-hidden="true"/>
                <span className="menu-end-order__btn-inner">
                    <OrderCartIcon className="menu-end-order__btn-icon"/>
                    <span className="menu-end-order__btn-text">{orderLabel}</span>
                </span>
            </a>
        </section>
    );
};

export default MenuEndOrderCTA;
