import React from 'react';
import styles from "../Component/Middlepages_03.module.css"


function BestSeller(props) {
    return (
        <div>

            <div>
            <i class='fas fa-crown'></i>
            <h3>Become a Reseller</h3>
            <p>200+ Happy Resellers</p>
            </div>

            <div>
              <div><span>Plan Includes :</span></div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",fontSize:"small",margin:"0px"}}>
                <div style={{display:"flex"}}>
                <span class="material-symbols-outlined" style={{color:"blue"}}>done</span>
                <p>Whitelabel IP Pool</p>
                </div> <div>
                <span class="material-symbols-outlined" style={{color:"blue"}}>done</span>
                <p>Whitelabel Subnets</p>
                </div>
                <div>
                <span class="material-symbols-outlined" style={{color:"blue"}}>done</span>
                <p>Residential Proxy</p>
                </div>
                <div>
                <span class="material-symbols-outlined" style={{color:"blue"}}>done</span>
                <p>Custom Bandwidth</p>
                </div>
                <div>
                <span class="material-symbols-outlined" style={{color:"blue"}}>done</span>
                <p>Priority Support</p>
                </div>
                
                
                    {/* <p>Whitelabel Subnets</p>
                    <p>Residential Proxy</p>
                    <p>Custom Bandwidth</p>
                    <p>Priority Support</p> */}
                </div>
            </div>
            
        </div>
    );
}

export default BestSeller;