import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function RoomImgSlider() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
    const [slider, setSlider] = useState();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "https://images.trvl-media.com/hotels/13000000/12280000/12270500/12270445/684c13f9.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
    "https://images.trvl-media.com/hotels/13000000/12280000/12270500/12270445/b86c1100.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
    "https://images.trvl-media.com/hotels/13000000/12280000/12270500/12270445/c5bc5a6d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
  ];

  return (
    <Box
      position={"relative"}
      height={"100%"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        size="xs"
        aria-label="left-arrow"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <AiOutlineLeft />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        size="xs"
        aria-label="right-arrow"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <AiOutlineRight />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            width="100%"
            h="11rem"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
            borderRadius="0.7rem 0.7rem 0rem 0rem"
          />
        ))}
      </Slider>
    </Box>
  );
}
