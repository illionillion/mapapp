import jsonDatas from '../data/sample2.json'
interface Props{
    id:number;
}
const FacilityText = ({id}:Props):JSX.Element => {

    const maptext = jsonDatas[id].text
    const style = {
        margin: '20px auto',
        width: '80%',
    }
    return(
        <div style={style}>
            {maptext}
        </div>
    )
}

export default FacilityText