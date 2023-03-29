import React from 'react';
import styles from "../Component/Middlepages_03.module.css"

function Ipv(props) {

    return (
        <div>

            <div>
                <div>
                    <h3 className={props.bg}>v{props.value}</h3>
                    <h3>IPv{props.value} Proxies</h3>
                    <p>Static/Rotating</p>
                </div>

                <div>
                    <span>From</span><br/>
                    <b className={props.co}>$4.75</b>/day
                    <br/>
                    OR<br/>
                    <b className={props.co}>$116.75</b>/mo
                </div>


            </div>

            <div className={styles.plan}>
                <p>Plan Includes :</p>
                <main>
                <span class="material-symbols-outlined" style={{color:props.col}}>done</span>
                <p>100 Threads</p>
                </main>

                <main>
                <span class="material-symbols-outlined" style={{color:props.col}}>done</span>
                <p>Dedicated IP Pool</p>
                </main>

                <main>
                <span class="material-symbols-outlined" style={{color:props.col}}>done</span>
                <p>Residential Proxy</p>
                </main>


                <main>
                <span class="material-symbols-outlined" style={{color:props.col}}>done</span>
                <p>Unlimited Bandwidth</p>
                </main>


                <main>
                <span class="material-symbols-outlined" style={{color:props.col}}>done</span>
                <p>Worldwide Locations</p>
                </main>


                
                <main>
                <span class="material-symbols-outlined" style={{color:props.col}}>done</span>
                <p>{props.value==4?"40 GBps":"100 GBps"}</p>
                </main>

                

            </div>

            <div>
                <button style={{backgroundColor:props.col}}>
                View Pricing <span class="material-symbols-outlined" >arrow_forward</span>
                </button>
            </div>
            
        </div>
    );
}

export default Ipv;