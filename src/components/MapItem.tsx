import { useDispatch, useSelector } from "react-redux";
import { clickAreaSlice } from "../features/clickArea";
import { AppState } from "../store";
import {ClickArea} from "../types/facilityItem.d"

type Props = {
  dataObj: {
    id: number;
  } & ClickArea;
};

const MapItem = ({ dataObj }: Props): JSX.Element => {
  const style = {};
  let coordsList = "";
  for (const i of dataObj.coordinates) {
    for (const j of i) {
      coordsList = `${coordsList},${j}`;
    }
  }
  coordsList = coordsList.replace(",", "");
  const { clickArea } = useSelector<AppState, { clickArea: number }>(
    (state) => ({
      clickArea: state.clickArea.id,
    })
  );
  const dispatch = useDispatch();
  const { setClickArea } = clickAreaSlice.actions;

  const whenclick = (name: string) => {
    (document.querySelector(`img[alt=${name}]`) as HTMLElement).click();
  };
  return (
    <area
      shape={dataObj.areaType}
      style={style}
      coords={coordsList}
      onClick={() => {
        dispatch(setClickArea({ id: dataObj.id }));
        whenclick(dataObj.name);
      }}
      alt={dataObj.name}
    ></area>
  );
};

export default MapItem;
