import React, { useState } from "react";

const MapItem = ({dataObj}) => {
    console.log(dataObj);
    const style = {
        // display:'block',
        // backgroundColor: 'black'
        // position: 'absolute',
        // top: dataObj.top,
        // left: dataObj.left,
        // width: dataObj.width,
        // height: dataObj.height,
        // borderWidth:'1px',
        // borderStyle:'solid',
        // borderColor:'black',
    }
    return(
        <area shape="rect" style={style} coords={dataObj.coords} onClick={()=>{alert(dataObj.text)}}></area>
    )

}

export default MapItem