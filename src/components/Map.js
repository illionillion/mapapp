import React, { useState } from "react";
import MapItem from "./MapItem";
import ImageMap from "image-map"

const Map = ({imageURL, items}) => {
    console.log(items);
    console.log(imageURL);
    const wrapstyle = {
        position:'relative',
        left: '2%',
        backgroundColor:'#ffffff',
        textAlign: 'center',
        width: '50%',
        height: '',
    }
    const imgstyle = {
        margin: 'auto',
    }
    // console.log(wrapstyle);
    return (
        <div style={wrapstyle}>
            <img style={imgstyle} onLoad={(e)=>ImageMap('img[usemap]')} src={imageURL} useMap="#map"/>
            <map name="map">
                {items.map((i,n) => <MapItem dataObj={i} key={n}/>)}
            </map>

         </div>
    )

}

export default Map