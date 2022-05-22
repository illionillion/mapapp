import MapItem from "./MapItem";
import jsonData from '../data/sample.json';
import ImageMap from 'image-map'

const Map = ():JSX.Element => {
    
    const items = jsonData.clickAreaList
    const imageURL = jsonData.mapPath
    const wrapstyle:any = {
        position:'relative',
        backgroundColor:'#ffffff',
        textAlign: 'center',
        width: '45%',
        margin:'auto'
    }
    const imgstyle = {
        margin: 'auto',
    }
    return (
        <div style={wrapstyle}>
            <img style={imgstyle} onLoad = {(e) => ImageMap('img[usemap]')} src = {require(`../data/${imageURL}`)} useMap = "#map"/>
            <map name="map">
                {items.map((i,n) => <MapItem dataObj={i} key={n}/>)}
            </map>

         </div>
    )

}

export default Map