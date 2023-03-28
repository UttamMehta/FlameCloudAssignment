import React from 'react';
import styles from "./Navbar.module.css"

function Navbar(props) {
    return (
        <div className={styles.main}> 
            <div className={styles.mainFirstDiv}>CreativeProxies</div>
            
            <div className={styles.mainSecondDiv}>      
            <p>Pricing</p>
            <p>Explore Tools</p>
            <p>Resources</p>
            <p>FAQs</p>
            <p>Blogs</p>
            </div>

            <div className={styles.mainFourthDiv}>
                 <p>Join Discord</p>
            <button>Log in</button>
            <button>Get Started</button>
            </div>
        </div>
    );
}

export default Navbar;