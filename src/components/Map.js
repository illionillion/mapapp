import React from "react";
import MapItem from "./MapItem";

const Map = ({imageURL, items}) => {
    console.log(items);
    console.log(imageURL);
    const style = {
        position:'relative',
        backgroundColor:'#ffffff',
        textAlign: 'center'

    }
    console.log(style);
    return (
        <div style={style}>
            <img src={imageURL} useMap="#map"/>
            <map name="map">
                {items.map((i,n) => <MapItem dataObj={i} key={n}/>)}
            </map>

         </div>
    )

}

export default Map