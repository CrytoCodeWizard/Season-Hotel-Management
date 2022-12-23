import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Tabs, TabList,  Tab,  } from "@chakra-ui/react";
import SPImages from "../Components/SPImages";
import Overview from "../Components/Overview";
import Rooms from "../Components/Rooms";

import SPLocation from "../Components/SPLocation";
import SPAmenities from "../Components/SPAmenities";
import SPReviews from "../Components/SPReviews";

import { useDispatch, useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import { getHotels } from "../Redux/AppContext/action";
import { Link } from "@chakra-ui/react";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  //const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const [currentHotel, setCurrentHotel] = useState({});
  const hotels = useSelector((state) => state.AppReducer.hotels);
  useEffect(() => {
    if (hotels.length === 0) {
      dispatch(getHotels("goa"));
    }
  }, [dispatch, hotels.length]);

  useEffect(() => {
    if (id) {
      const singleHotel = hotels.find((item) => item.id === Number(id));
      singleHotel && setCurrentHotel(singleHotel);
      localStorage.setItem("singleHotel", JSON.stringify(singleHotel));
    }
  }, [id, hotels]);

  return (
    <Box bg="#F8F5F4" h="auto" w="100%">
      <Box w="75%" p={4} m="auto" h="auto">
        <Box w="100%" bg="white" my="1rem">
          <SPImages
            img1={currentHotel.img1}
            img2={currentHotel.img2}
            img3={currentHotel.img3}
            img4={currentHotel.img4}
          />
        </Box>
        <Box
          my="1rem"
          top="0"
          overflow="hidden"
          bg="white"
          position="sticky"
          zIndex={10}
        >
          <Tabs variant="line" align="Start">
            <TabList>
              <Tab>
                <Link
                  href="#overview"
                  fontWeight={500}
                  fontSize="0.95rem"
                  lineHeight="1.2rem"
                >
                  Overview
                </Link>
              </Tab>
              <Tab>
                <Link
                  href="#rooms"
                  fontWeight={500}
                  fontSize="0.95rem"
                  lineHeight="1.2rem"
                >
                  Rooms
                </Link>
              </Tab>
              <Tab>
                <Link
                  href="#locations"
                  fontWeight={500}
                  fontSize="0.95rem"
                  lineHeight="1.2rem"
                >
                  Locations
                </Link>
              </Tab>

              <Tab>
                <Link
                  href="#amenities"
                  fontWeight={500}
                  fontSize="0.95rem"
                  lineHeight="1.2rem"
                >
                  Amenities
                </Link>
              </Tab>

              <Tab>
                <Link
                  href="#reviews"
                  fontWeight={500}
                  fontSize="0.95rem"
                  lineHeight="1.2rem"
                >
                  Reviews
                </Link>
              </Tab>
            </TabList>
          </Tabs>
        </Box>
        <Box w="100%" h="auto" my="0.5rem" id="overview" paddingTop="2rem">
          <Overview
            name={currentHotel.heading1}
            rating={currentHotel.rating}
            review={currentHotel.review}
          />
        </Box>

        <Box w="100%" h="auto" my="0.5rem" id="rooms" paddingTop="2rem">
          <Rooms price1={currentHotel.price1} price2={currentHotel.price2} />
        </Box>
        <Box w="100%" h="auto" my="0.5rem" id="locations" paddingTop="2rem">
          <SPLocation name={currentHotel.heading1} />
        </Box>
        <Box w="100%" h="auto" my="0.5rem" id="amenities" paddingTop="2rem">
          <SPAmenities />
        </Box>
        <Box w="100%" h="auto" my="0.5rem" id="reviews" paddingTop="2rem">
          <SPReviews
            rating={currentHotel.rating}
            review={currentHotel.review}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProduct;
