import React, { useState } from "react";

const MapItem = ({dataObj}) => {
    console.log(dataObj);
    const style = {
        position: 'absolute',
        top: dataObj.top,
        left: dataObj.left,
        width: dataObj.width,
        height: dataObj.height,
        borderWidth:'1px',
        borderStyle:'solid',
        borderColor:'black',
    }
    return(
        <div style={style} onClick={()=>{alert(dataObj.text)}}></div>
    )

}

export default MapItem