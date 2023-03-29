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
                <button>Get Started <span class="material-symbols-outlined">
arrow_forward
</span></button>
            </div>
        <div className={styles.pages01_FifthDiv}>
        <div>
        <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<i class="fa fa-star-half-full"></i>

        </div>
        <div className={styles.page01_SixthDiv}>
     <b> <span>  Rated 4.5 on</span>
     <span class="fa fa-star"></span>
<span>Trustpilot</span></b>
        </div>
       
        </div>

        <div className={styles.pages01_SeventhDiv}>

        <Img_Content color={"rgba(59, 201, 251, 1)"}/>
        <Img_Content color={"rgba(114, 230, 229, 1)"}/>
        <Img_Content color={"rgba(128, 252, 106, 1)"}/>
        <Img_Content color={"rgba(46, 115, 232, 1)"}/>
        </div>
        </div>
    );
}

export default Middlepages_01;