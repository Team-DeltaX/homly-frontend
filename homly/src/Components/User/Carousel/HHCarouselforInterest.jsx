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
        {interestedHH &&
          interestedHH.map((hh) => (
            <div data-aos="fade-right" data-aos-duration="700" key={hh.holiday_home.HolidayHomeId}>
              <HolidayHomeCard
                key={hh.holiday_home.HolidayHomeId}
                HHName={hh.holiday_home.Name}
                HHLocation={hh.holiday_home.Address}
                HHPrice={hh.holiday_home.TotalRental}
                HHRating={Math.round(hh.rating * 10) / 10}
                HHImage={
                  "https://www.ribbyhall.co.uk/uploads/images/featured/holiday-home-featured-1.jpg"
                }
                showInterest={true}
                interst1_lable={hh.seperated.inter1.name}
                interst1_value={hh.seperated.inter1.value*10}
                interst2_lable={hh.seperated.inter2.name}
                interst2_value={hh.seperated.inter2.value*10}
                interst3_lable={hh.seperated.inter3.name}
                interst3_value={hh.seperated.inter3.value*10}
              />
            </div>
          ))}
      </Carousel>
    </ThemeProvider>
  );
}