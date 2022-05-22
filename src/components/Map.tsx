import MapItem from "./MapItem";
import jsonData from '../data/sample.json';
import ImageMap from 'image-map'

const Map = ():JSX.Element => {
    
    const items = jsonData.clickAreaList
    const imageURL = jsonData.mapPath
    // const mapname = jsonData.name
    // const maptext = jsonData.text
    console.log(items);
    console.log(imageURL);
    const wrapstyle:any = {
        position:'relative',
        left: '2%',
        backgroundColor:'#ffffff',
        textAlign: 'center',
        width: '50%',
    }
    const imgstyle = {
        margin: 'auto',
    }
    // console.log(wrapstyle);
    return (
        <div style={wrapstyle}>
            {/* <p>{mapname}</p> */}
            <img style={imgstyle} onLoad = {(e) => ImageMap('img[usemap]')} src = {require(`../data/${imageURL}`)} useMap = "#map"/>
            <map name="map">
                {items.map((i,n) => <MapItem dataObj={i} key={n}/>)}
            </map>
            {/* <div>{maptext}</div> */}

         </div>
    )

}

export default Map