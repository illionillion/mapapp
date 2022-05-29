import { useDispatch } from 'react-redux';
import { clickAreaSlice } from '../features/clickArea';
import { ClickArea } from '../types/facilityItem';

type Props = {
  dataObj: {
    id: number
  } & ClickArea
}

const MapItem = ({ dataObj }: Props): JSX.Element => {
  const style = {};
  let coordsList = "";
  for (const i of dataObj.coordinates) {
    for (const j of i) {
      coordsList = `${coordsList},${j}`;
    }
  }
  coordsList = coordsList.replace(",", "");
	const dispatch = useDispatch();
	const { setClickArea } = clickAreaSlice.actions;

  return (
    <area
      shape={dataObj.areaType}
      style={style}
      coords={coordsList}
      onClick={() => dispatch(setClickArea({id: dataObj.id}))}
			alt={dataObj.name}
      title={dataObj.name}
    ></area>
  );
};

export default MapItem;
