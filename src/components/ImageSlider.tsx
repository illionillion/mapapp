import Facility from "../data/sample.json";

export const ImageSlider = (): JSX.Element => {
  const clickAreaList = Facility.clickAreaList;
  return (
    <div>
      <ul>
        {clickAreaList.map((v) => (
          <li key={v.name}>
            <img src={require(`../data/${v.photoPath}`)} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};
