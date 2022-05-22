import Slider from "react-slick";
import Facility from "../data/sample.json";

export const ImageSlider = (): JSX.Element => {
  const clickAreaList = Facility.clickAreaList;
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
        {clickAreaList.map((v) => (
          <li key={v.name}>
            <img src={require(`../data/${v.photoPath}`)} alt={v.name} />
          </li>
        ))}
    </Slider>
    </div>
  );
};
