import Button from "components/button";

import { SliderItem } from "components/slider/Slider.styled";

import bannerImage from "assets/images/banner-image.png";

const Banner = () => (
  <SliderItem isSecondary isSingle visibleImage>
    <img src={bannerImage} alt="banner" />
    <div className="content">
      <h3>Large Inventory Of Power Tools & Accessories</h3>
      <p>
        Find the Aluminum and Stainless Steel items for your project in stock
        and ready to ship today! Avoid project delays and long lead times in a
        challenging supply chain for specialty metals and non-ferrous items. We
        are well stocked and here to serve you with guided support.
      </p>
      <Button link="#">Shop Now</Button>
    </div>
  </SliderItem>
);

export default Banner;
