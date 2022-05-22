import { useDispatch, useSelector } from 'react-redux';

import { clickAreaSlice } from '../features/clickArea';
import { AppState } from '../store';

const MapItem = ({ dataObj }: any): JSX.Element => {
  const style = {};
  let coordsList = "";
  for (const i of dataObj.coordinates) {
    for (const j of i) {
      coordsList = `${coordsList},${j}`;
    }
  }
  coordsList = coordsList.replace(",", "");
  console.log(coordsList);
	const { clickArea } = useSelector<
		AppState,
		{ clickArea: number; }
	>((state) => ({
		clickArea: state.clickArea.id,
	}));
	const dispatch = useDispatch();
	const { setClickArea } = clickAreaSlice.actions;
  return (
    <area
      shape={dataObj.areaType}
      style={style}
      coords={coordsList}
      onClick={() => {
				dispatch(setClickArea({id: dataObj.id}))
        alert(dataObj.name + "\n" + dataObj.photoPath);
      }}
			alt={dataObj.name}
    ></area>
  );
};

export default MapItem;
