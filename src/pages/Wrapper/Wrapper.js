import React from 'react';
import { Link } from 'react-router';
import style from './Wrapper.less';

export default function Wrapper({children}) {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <h1>
                    <Link to="/" className={style.headerLink}>Header</Link>
                </h1>
            </div>
            <div className={style.content}>
                {children}
            </div>
            <div className={style.footer}>
                <h1>Footer</h1>
            </div>
        </div>
    );
}
