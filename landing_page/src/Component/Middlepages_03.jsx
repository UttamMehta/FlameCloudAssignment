import React from 'react';
import Ipv from '../pages/Ipv';
import Review from '../pages/Review';
import styles from "./Middlepages_03.module.css"

function Middlepages_03(props) {


    return (
        <div className={styles.page03_mainDiv}>
            
        <div className={styles.page03_FirstDiv}>
        <h1>You choose, we <span className={styles.page03_blue}>Deliver!</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</p>
        </div>


            <div className={styles.page03_SecondDiv}>
                <Ipv bg={styles.bl} co={styles.blue} col="blue"value="4" />
                <Ipv bg={styles.gr} co={styles.green} col="green"value="6" />
            </div>


            <div className={styles.page03_ThirdDiv}>
            become seller
            </div>

            <div className={styles.page03_FourthDiv}>
                <h2>Customers <span className={styles.green}> Love</span> our Proxies</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</p>
            </div>
        <div className={styles.page03_FifthDiv}>
        <Review name="ECHO DZNS" job="Web Designer" company="CreativeProxies"/>
        <Review name="John Doe" job="Random Text" company="ABC"/>
        <Review name="John Doe" job="Random Text" company="ABC"/>
        </div>
        </div>
    );
}

export default Middlepages_03;