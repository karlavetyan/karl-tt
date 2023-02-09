import { useCallback, useEffect, useRef, useState } from "react";

import { CATEGORY_SLIDER_DATA } from "constants/sliders";

import {
  Header,
  Categories,
  ScrollBlock,
  CategoryItem,
  NameAndNavigation,
  Navs
} from "./Categories.styled";
import Button from "components/button";

const NEXT_BUTTON = 1;
const PREV_BUTTON = -1;
const SCROLL_WIDTH = 150;

const CategoriesComponent = () => {
  const itemsRef = useRef();

  const [visibleButtons, setVisibleButtons] = useState({
    [NEXT_BUTTON]: true,
    [PREV_BUTTON]: false
  });

  const handleSlider = useCallback(
    showType => () => {
      itemsRef.current?.scrollBy({
        behavior: "smooth",
        left: showType * SCROLL_WIDTH
      });
    },
    []
  );

  useEffect(() => {
    const observers = [];
    const {
      current: { childNodes: items }
    } = itemsRef;

    if (window.IntersectionObserver) {
      items.forEach((item, index) => {
        const buttonType = !index
          ? PREV_BUTTON
          : index === items.length - 1
          ? NEXT_BUTTON
          : "";

        if (buttonType) {
          const observer = new IntersectionObserver(
            ([{ isIntersecting }]) => {
              setVisibleButtons(prevState => ({
                ...prevState,
                [buttonType]: !isIntersecting
              }));
            },
            { threshold: 0.5, rootMargin: "10%" }
          );

          observer.observe(item);
          observers.push({ observer, observerRefValue: item });
        }
      });
    }

    return () => {
      observers.forEach(({ observer, observerRefValue }) =>
        observer.unobserve(observerRefValue)
      );
    };
  }, []);

  return (
    <Categories>
      <Header>
        <NameAndNavigation>
          <h3>Categories</h3>
          <Navs
            next={visibleButtons[NEXT_BUTTON]}
            prev={visibleButtons[PREV_BUTTON]}
          >
            <i
              className="icon-arrow-right"
              onClick={handleSlider(PREV_BUTTON)}
            />
            <i
              className="icon-arrow-left"
              onClick={handleSlider(NEXT_BUTTON)}
            />
          </Navs>
        </NameAndNavigation>
        <Button
          icon="chat"
          isSmall
          largeRadius
          withShadow
          onClick={() => window?.tidioChatApi.open()}
        >
          Live chat
        </Button>
      </Header>
      <ScrollBlock ref={itemsRef}>
        {CATEGORY_SLIDER_DATA.map(({ image, name, link }, index) => (
          <CategoryItem key={index}>
            <a href={link} className="invisibleLink">
              {name}
            </a>
            <img src={image} alt={name} />
            <h4>{name}</h4>
          </CategoryItem>
        ))}
      </ScrollBlock>
    </Categories>
  );
};

export default CategoriesComponent;
