import { useSelector } from "react-redux";
import { AppState } from "../store";
import { Facility } from "../types/facilityItem.d";
interface Props {
  id: number;
}
const FacilityText = ({ id }: Props): JSX.Element => {
  const facilityList:Facility[] = useSelector((state:AppState)=> state.FacilityList )
  const maptext = facilityList[id] ? facilityList[id].text : ''
  const style = {
    margin: "20px auto",
    width: "80%",
  };
  return <div style={style}>{maptext}</div>;
};

export default FacilityText;
