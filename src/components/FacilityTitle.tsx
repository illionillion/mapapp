import { useSelector } from "react-redux";
import { AppState } from "../store";
import { Facility } from "../types/facilityItem.d";
interface Props {
  id: number;
}
const FacilityTitle = ({ id }: Props): JSX.Element => {
  const facilityList:Facility[] = useSelector((state:AppState)=> state.FacilityList )
  const mapname = facilityList[id] ? facilityList[id].name : ''
  const style = {
    fontSize: "2em",
    margin: "15px auto",
  };
  return (
    <>
      <h1 style={style}>{mapname}</h1>
    </>
  );
};

export default FacilityTitle;
