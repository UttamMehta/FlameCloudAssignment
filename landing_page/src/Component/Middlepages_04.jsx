import React from 'react';
import styles from "./Middlepages_04.module.css"

function Middlepages_04(props) {
    let arr=[1,2,3,4,5,6];
    return (
        <div className={styles.page04_mainDiv}>
            <div className={styles.page04_FirstDiv}>
            <h2>
            Read our <span className={styles.blue}>Exclusive</span> Blog
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</p>
            </div>

          
          
          
          <div className={styles.page04_SecondDiv}>
          
          {
            arr.map((e)=> <div>
            <h3></h3>
            <h4> Blog Title appear here</h4>
            <p>Category name here</p>
        </div>)
            
          }
           
          </div>
            
        </div>
    );
}

export default Middlepages_04;