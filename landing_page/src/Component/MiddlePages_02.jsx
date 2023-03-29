import React from 'react';
import Feature from '../pages/Feature';

import styles from "./MiddlePages_02.module.css"

function MiddlePages_02(props) {
let arr=[1,2,3,4,5,6,7,8];

    return (
        <div className={styles.Pages02_mainDiv}>
            <div className={styles.Pages02_FirstDiv}>
        <h2>Why we are the Best Proxy Providers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</p>

            </div>
            <div className={styles.Pages02_SecondDiv}>
        {arr.map((e)=>{
            return <Feature number={e}/>
        })}
            </div>

        </div>
    );
}

export default MiddlePages_02;