const MapItem = ({dataObj}:any):JSX.Element => {
    const style = {
    }
    let coordsList=''
    for (const i of dataObj.coordinates) {
        for (const j of i) {
            coordsList=`${coordsList},${j}`
        }
    }
    coordsList = coordsList.replace(',','')
    console.log(coordsList);
    return(
        <area shape={dataObj.areaType} style={style} coords={coordsList} onClick={()=>{alert(dataObj.name+'\n'+dataObj.photoPath)}}></area>
    )

}

export default MapItem