import React from 'react';
import styles from "./Navbar.module.css"

function Navbar(props) {
    return (
        <div className={styles.main}> 
            <div className={styles.mainFirstDiv}>CreativeProxies</div>
            
            <div className={styles.mainSecondDiv}>      
            <p>Pricing</p>
         <div> <p>Explore Tools</p> <span class="material-symbols-outlined">
expand_more
</span></div> 
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