import jsonData from '../data/sample.json'
const FacilityTitle = ():JSX.Element => {

    const mapname = jsonData.name

    const style = {
        fontSize:'2em',
        margin:'15px auto'

    }
    return(
        <>
            <h1 style={style}>{mapname}</h1>
        </>
    )
}

export default FacilityTitle