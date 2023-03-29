import React from 'react';
import styles from "./LastPage.module.css"

function LastPage(props) {
    return (
        <div className={styles.Lastpage_mainDiv}> 
            
            <div className={styles.Lastpage_FirstDiv}>
                <h2>CreativeProxies</h2>
                <span>Copyright © 2023 Creative Proxies.
                All rights reserved.</span>
               <button>Join Our Discord</button>
            </div>
            
            <div>
            <span>Explore</span><br/>
            <p>Proxy Location Checker</p>
            <p>IPv6 Comptability</p>
            <p>Blogs</p>
            </div>

            <div>
            <span>Resources</span><br/>
            <p>FAQs</p>
            <p>Branding</p>
            <p>Network Information</p>
            <p>Imprint</p>
            </div>

            <div>
            <span>Support</span><br/>
            <p>Status</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            
            </div>

        </div>
    );
}

export default LastPage;