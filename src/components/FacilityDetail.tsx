import Map from "./Map";
import FacilityTitle from "./FacilityTitle";
import FacilityText from "./FacilityText";
import { ImageSlider } from "./ImageSlider";
import { useParams } from "react-router-dom";

export const FacilityDetail = (): JSX.Element => {
  const urlParams = useParams<{ id: string }>();
  const itemId = Number(urlParams.id) || 0;
  return (
    <div>
      <FacilityTitle id={itemId} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Map id={itemId} />
        <div
          style={{
            width: "35%",
            height: "500px",
            margin: "auto",
            overflow: "hidden",
          }}
        >
          <ImageSlider id={itemId} />
        </div>
      </div>
      <FacilityText id={itemId} />
    </div>
  );
};
