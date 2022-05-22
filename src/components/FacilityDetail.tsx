import Map from "./Map";
import FacilityTitle from "./FacilityTitle";
import FacilityText from "./FacilityText";
import { ImageSlider } from "./ImageSlider";

export const FacilityDetail = (): JSX.Element => {
    return (
      <div>
          <FacilityTitle/>
          <div style={{display:'flex'}}>
            <Map />
            <div style={{overflow:'auto',height:'500px'}}>
              <ImageSlider />
            </div>
          </div>
          <FacilityText/>
      </div>
    );
  };