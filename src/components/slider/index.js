import { Carousel } from "react-responsive-carousel";

import Button from "components/button";

import { Slider, SliderItem } from "./Slider.styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SliderComponent = ({ data = [] }) => {
  const settings = {
    showThumbs: false,
    showStatus: false,
    infiniteLoop: true
  };

  return (
    <Slider>
      <Carousel {...settings}>
        {data.map(({ image, buttonLink, buttonText, title }, index) => (
          <SliderItem key={index}>
            <img src={image} alt={title} />
            <div className="content">
              <h3>{title}</h3>
              <Button link={buttonLink}>{buttonText}</Button>
            </div>
          </SliderItem>
        ))}
      </Carousel>
    </Slider>
  );
};

export default SliderComponent;
