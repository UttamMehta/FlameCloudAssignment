import React from 'react';

function Img_Content(props) {
    return (
        <div>
            <div>
            <span class="material-symbols-sharp" style={{backgroundColor:props.color,height:"30px",borderRadius:"4px"}}>
lock
</span></div>
<div style={{paddingRight:"32px",paddingLeft:"5px",textAlign:"left"}}>
    <span  >Lorem Ipsum
Dolor Sit Amet Top</span>
</div>

        </div>
    );
}

export default Img_Content;