import jsonDatas from "../data/sample2.json";
interface Props {
  id: number;
}
const FacilityTitle = ({ id }: Props): JSX.Element => {
  const mapname = jsonDatas[id].name;

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
