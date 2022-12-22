import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
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
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
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
          <Box my="1rem">
            <Tabs
              variant="line"
              align="Start"
              isFitted="true"
              position="-webkit-sticky"
            >
              <TabList>
                <Tab>
                  <Link href="#overview">Overview</Link>
                </Tab>
                <Tab>
                  <Link href="#rooms">Rooms</Link>
                </Tab>
                <Tab>
                  <Link href="#locations">Locations</Link>
                </Tab>

                <Tab>
                  <Link href="#amenities">Amenities</Link>
                </Tab>

                <Tab>
                  <Link href="#reviews">Reviews</Link>
                </Tab>
              </TabList>
            </Tabs>
          </Box>
          <Box w="100%" h="auto" my="1rem" id="overview">
            <Overview
              name={currentHotel.heading1}
              rating={currentHotel.rating}
              review={currentHotel.review}
            />
          </Box>
        </Box>
        <Box w="100%" h="auto" my="1rem" id="rooms">
          <Rooms price1={currentHotel.price1} price2={currentHotel.price2} />
        </Box>
        <Box w="100%" h="auto" my="1rem" id="locations">
          <SPLocation name={currentHotel.heading1} />
        </Box>
        <Box w="100%" h="auto" my="1.2rem" id="amenities">
          <SPAmenities />
        </Box>
        <Box w="100%" h="auto" my="1rem" id="reviews">
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
