import React from "react";
import { ThemeProvider } from "@mui/material";

import HolidayHomeCard from "../HHCard/HolidayHomeCard";

import theme from "../../../HomlyTheme";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function HHCarousel(props) {
  


  return (
    <ThemeProvider theme={theme}>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={true}
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 821,
            },
            items: 2,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 0.1,
            partialVisibilityGutter: 0,
          },
          tablet: {
            breakpoint: {
              max: 820,
              min: 464,
            },
            items: 1,
            partialVisibilityGutter: 20,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {props.sortedByRating
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 6)
          .map((item) => (
              <HolidayHomeCard
                key={item.HHId}
                HHName={item.name}
                HHLocation={item.address}
                HHPrice={item.price}
                HHRating={item.rating}
                HHImage={item.image}
                showInterest={false}
              />
          ))}
      </Carousel>
      
    </ThemeProvider>
  );
}
