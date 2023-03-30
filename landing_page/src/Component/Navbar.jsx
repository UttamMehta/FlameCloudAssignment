import React, { useState } from 'react';
import styles from "./Navbar.module.css"

function Navbar(props) {
const [state,setState]=useState("block");
const [state1,setState1]=useState("none");

const handle=()=>{
state==="none"?setState("block"):setState("none");
state1==="none"?setState1("block"):setState1("none");
}

    return (
        <div className={styles.uttam}>
        <div className={styles.main}> 
            <div className={styles.mainFirstDiv}>CreativeProxies</div>
            
            <div className={styles.mainSecondDiv}>      
            <p>Pricing</p>
         <div> <p>Explore Tools</p> <span class="material-symbols-outlined">
expand_more
</span></div> 
<div> <p>Resources</p> <span class="material-symbols-outlined">
expand_more
</span></div> 
            <p>FAQs</p>
            <p>Blogs</p>
            </div>

            <div className={styles.mainFourthDiv} style={{alignItems:"center"}}>
                 <p>Join Discord</p>
            <button>Log in</button>
            <button>Get Started</button>
            <div className={styles.sidebar}><div class="w3-sidebar w3-bar-block w3-border-right" style={{display:state1,padding:"10px",margin:"200px"}} id="mySidebar">
  <button class="w3-bar-item w3-large" onClick={handle}  style={{marginTop:"185px"}}>☰ &times;</button>
   <p>Pricing</p>
  <p>Explore Tools</p>
 <p>Resources</p>
 <p>FAQs</p>
     <p>Blogs</p>
     <p>Join Discord</p>
     <button style={{border:"none"}}>Log in</button>
</div>

<div class="w3-teal">
  <button class="w3-button w3-teal w3-xlarge" onclick="handle" style={{display:state}} onClick={handle}>☰</button>
</div>
            </div>
        </div>
      

            </div>
        </div>
    );
}

export default Navbar;