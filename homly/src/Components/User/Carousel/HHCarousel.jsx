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
      
          {
            sortedByRatingHH.slice(0, 5).map((item) => (
              <HolidayHomeCard
                key={item.HolidayHomeId}
                HHName={item.Name}
                HHLocation={item.Address}
                HHPrice={item.TotalRental}
                HHRating={item.overall_rating}
                HHImage={"https://www.cnaccountants.com.au/wp-content/uploads/2023/03/hOLIDAY-HOMES-TAX.jpg"}
                showInterest={false}
              />
            ))
          }
          
      </Carousel>
      
    </ThemeProvider>
  );
}
