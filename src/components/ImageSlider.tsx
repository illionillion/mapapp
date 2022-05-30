import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";
import { clickAreaSlice } from "../features/clickArea";
import { useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import Facility from "../data/sample.json";

interface Props {
  id: number;
}

export const ImageSlider = ({ id }: Props): JSX.Element => {
  const clickAreaList = Facility.clickAreaList;
  const sliderRef = useRef<Slider>(null);
  const sliderSettings: Settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
  };
  const { clickAreaId } = useSelector<AppState, { clickAreaId: number }>(
    (state) => ({
      clickAreaId: state.clickArea.id,
    })
  );
  const dispatch = useDispatch();
  const { setClickArea } = clickAreaSlice.actions;
  useEffect(() => {
    sliderRef.current?.slickGoTo(clickAreaId);
  }, [clickAreaId]);
  const listyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    WebkitTransform: "translate(-50%, -50%)",
  };
  return (
    <div style={listyle}>
      <img
        src={require(`../data/${clickAreaList[clickAreaId].photoPath}`)}
        alt={clickAreaList[clickAreaId].name}
        title={clickAreaList[clickAreaId].name}
      />
      <Slider {...sliderSettings} ref={sliderRef}>
        {clickAreaList.map((v, index) => (
          <li key={v.name}>
            <img
              src={require(`../data/${v.photoPath}`)}
              alt={v.name}
              onClick={() => dispatch(setClickArea({ id: index }))}
            />
          </li>
        ))}
      </Slider>
    </div>
  );
};
