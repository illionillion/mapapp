import jsonData from '../data/sample.json'
const FacilityText = ():JSX.Element => {

    const maptext = jsonData.text

    return(
        <div>
            {maptext}
        </div>
    )
}

export default FacilityText