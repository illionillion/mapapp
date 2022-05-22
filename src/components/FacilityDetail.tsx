import Map from "./Map";
import FacilityTitle from "./FacilityTitle";
import FacilityText from "./FacilityText";
import { ImageSlider } from "./ImageSlider";

export const FacilityDetail = (): JSX.Element => {
    return (
      <div>
          <FacilityTitle/>
          <div style={{display:'flex',alignItems:'center'}}>
            <Map />
            <div style={{width:'35%',height:'500px',margin:'auto'}}>
              <ImageSlider />
            </div>
          </div>
          <FacilityText/>
      </div>
    );
  };