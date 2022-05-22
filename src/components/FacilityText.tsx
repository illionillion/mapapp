import jsonDatas from '../data/sample2.json'
interface Props{
    id:number;
}
const FacilityText = ({id}:Props):JSX.Element => {

    const maptext = jsonDatas[id].text

    return(
        <div>
            {maptext}
        </div>
    )
}

export default FacilityText