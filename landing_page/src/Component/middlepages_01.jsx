import React from 'react';
import Img_Content from '../pages/Img_Content';
import styles from "./Middlepages_01.module.css"

function Middlepages_01(props) {
    return (
        <div className={styles.mains}>
            <div className={styles.page01_FirstDiv}>
            WELCOME TO CREATIVE PROXIES
            </div>

            <div>
            <h1>
            We are the <span className={styles.blue}>Fastest</span> and the <span className={styles.green}>Most
             Reliable</span> Proxy Service since 2020</h1>
            </div>

            <div className={styles.pages01_ThirdDiv}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</p>
            </div>

            <div className={styles.pages01_FourthDiv}>
                <button>Get Started</button>
            </div>
        <div className={styles.pages01_FifthDiv}>
        <div>
    <span class="material-symbols-outlined">
star_rate
</span>
<span class="material-symbols-outlined">
star_rate
</span>
<span class="material-symbols-outlined">
star_rate
</span>
<span class="material-symbols-outlined">
star_rate
</span>
<span class="material-symbols-outlined">
star_rate
</span>

        </div>
        <div className={styles.page01_SixthDiv}>
     <b> <span>  Rated 4.5 on</span>
        <span class="material-symbols-outlined" style={{color:"green"}}>
star_rate
</span>
<span>Trustpilot</span></b>
        </div>
       
        </div>

        <div className={styles.pages01_SeventhDiv}>
        <Img_Content color={"green"}/>
        </div>
        </div>
    );
}

export default Middlepages_01;