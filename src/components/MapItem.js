import React, { useState } from "react";

const MapItem = ({dataObj}) => {
    // console.log(dataObj);
    const style = {
    }
    return(
        <area shape="rect" style={style} coords={dataObj.coords} onClick={()=>{alert(dataObj.text)}}></area>
    )

}

export default MapItem