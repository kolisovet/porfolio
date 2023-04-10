import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';

function Footer() {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Ivan Kolesov</h2>
                <div className={style.snBox}>
                    <div className={style.sn}>1</div>
                    <div className={style.sn}>2</div>
                    <div className={style.sn}>3</div>
                    <div className={style.sn}>4</div>
                </div>
                <h2 className={style.title}>2023 All rights reserved</h2>
            </div>
        </div>
    );
}

export default Footer;
