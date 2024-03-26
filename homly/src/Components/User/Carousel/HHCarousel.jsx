import React from "react";
import { ThemeProvider } from "@mui/material";
import HolidayHomeCard from "../HHCard/HolidayHomeCard";
import theme from "../../../HomlyTheme";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function HHCarousel({ sortedByRatingHH }) {
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
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
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
        {sortedByRatingHH.map((item, index) => (
          <div
            data-aos="fade-right"
            data-aos-duration="700"
            key={item.HolidayHomeId}
          >
            <HolidayHomeCard
              key={item.HolidayHomeId}
              HHID={item.HolidayHomeId}
              HHName={item.Name}
              HHLocation={item.Address}
              HHPrice={item.TotalRental}
              HHRating={item.overall_rating}
              HHImage={item.HHImage}
              showInterest={false}
            />
          </div>
        ))}
      </Carousel>
    </ThemeProvider>
  );
}
