import React from "react";
import { ThemeProvider } from "@mui/material";

import HolidayHomeCard from "../HHCard/HolidayHomeCard";

import theme from "../../../HomlyTheme";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function HHCarouselforInterest({ interestedHH }) {
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
        { interestedHH && interestedHH.map((hh) => (
          <HolidayHomeCard
            key={hh.holiday_home.HolidayHomeId}
            HHName={hh.holiday_home.Name}
            HHLocation={hh.holiday_home.Address}
            HHPrice={hh.holiday_home.TotalRental}
            HHRating={hh.holiday_home.wifi_rating}
            HHImage={
              "https://www.ribbyhall.co.uk/uploads/images/featured/holiday-home-featured-1.jpg"
            }
          />
        ))}
      </Carousel>
    </ThemeProvider>
  );
}
