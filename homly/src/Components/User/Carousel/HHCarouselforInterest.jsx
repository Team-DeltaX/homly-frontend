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
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
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
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
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
              <HolidayHomeCard
                key={hh.holiday_home.HolidayHomeId}
                HHID={hh.holiday_home.HolidayHomeId}
                HHName={hh.holiday_home.Name}
                HHLocation={hh.holiday_home.Address}
                HHPrice={hh.holiday_home.TotalRental}
                HHRating={Math.round(hh.rating * 10) / 10}
                HHImage={hh.holiday_home.MainImage}
                showInterest={true}
                interst1_lable={hh.seperated.inter1.name}
                interst1_value={hh.seperated.inter1.value*10}
                interst2_lable={hh.seperated.inter2.name}
                interst2_value={hh.seperated.inter2.value*10}
                interst3_lable={hh.seperated.inter3.name}
                interst3_value={hh.seperated.inter3.value*10}
              />
          ))}
      </Carousel>
    </ThemeProvider>
  );
}
