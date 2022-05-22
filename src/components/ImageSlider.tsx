import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import Slider from "react-slick";
import Facility from "../data/sample.json";

import { clickAreaSlice } from '../features/clickArea';
import { AppState } from '../store';

export const ImageSlider = (): JSX.Element => {
  const clickAreaList = Facility.clickAreaList;
  // TODO: any型を具体的な型に修正
  const [navMain, setNavMain] = useState<any>()
  const [navSub, setNavSub] = useState<any>()
  let settingsMain = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let settingsSub = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: true,
  };
  const listyle:any = {
    backgroundColor:'#ffffff',
    margin:'10px',
  }
  const { clickArea } = useSelector<
		AppState,
		{ clickArea: number; }
	>((state) => ({
		clickArea: state.clickArea.id,
	}));
	const dispatch = useDispatch();
	const { setClickArea } = clickAreaSlice.actions;
  return (
    <div style={listyle}>
      <Slider {...settingsMain} asNavFor={navSub} ref={sliderMain => setNavMain(sliderMain)}>
        {clickAreaList.map((v) => (
          <li  key={v.name}>
            <img src={require(`../data/${v.photoPath}`)} alt={v.name} />
          </li>
        ))}
      </Slider>
      <Slider {...settingsSub} asNavFor={navMain} ref={sliderSub => setNavSub(sliderSub)}>
        {clickAreaList.map((v) => (
          <li key={v.name}>
            <img src={require(`../data/${v.photoPath}`)} alt={v.name} />
          </li>
        ))}
      </Slider>
    </div>
  );
};
