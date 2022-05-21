import React, { useState } from "react";
import MapItem from "./MapItem";

const Map = ({imageURL, items}) => {
    console.log(items);
    console.log(imageURL);
    // const [image, setImage] = useState(null)
    // console.log(image);
    const wrapstyle = {
        position:'relative',
        left: '2%',
        backgroundColor:'#ffffff',
        textAlign: 'center',
        width: '50%',
        height: '',
        overflow:'auto'
    }
    const imgstyle = {
        maxWidth: 'initial',
        margin: 'auto',
    }
    // console.log(wrapstyle);
    return (
        <div style={wrapstyle}>
            <img style={imgstyle} src={imageURL} useMap="#map"/>
            <map name="map">
                {items.map((i,n) => <MapItem dataObj={i} key={n}/>)}
            </map>

         </div>
    )

}

export default Map