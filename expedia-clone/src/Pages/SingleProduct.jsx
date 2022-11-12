import React, { useEffect, useState } from 'react';
import { Box } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SPImages from '../Components/SPImages';
import Overview from '../Components/Overview';
import Rooms from '../Components/Rooms';

import SPLocation from '../Components/SPLocation';
import SPAmenities from '../Components/SPAmenities';
import SPReviews from '../Components/SPReviews';

import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getHotels } from '../Redux/AppContext/action';


const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  
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
              <Tabs variant="line" align="Start">
                <TabList>
                  <Tab>Overview</Tab>
                  <Tab>Rooms</Tab>
                  <Tab>Location</Tab>

                  <Tab>Amenities</Tab>

                  <Tab>Policies</Tab>

                  <Tab>Reviews</Tab>
                </TabList>
              </Tabs>
            </Box>
            <Overview
              name={currentHotel.heading1}
              rating={currentHotel.rating}
              review={currentHotel.review}
            />
          </Box>
          <Box w="100%" h="auto" my="1rem">
            <Rooms price1={currentHotel.price1} price2={currentHotel.price2} />
          </Box>
          <Box w="100%" h="auto" my="1rem">
            <SPLocation name={currentHotel.heading1} />
          </Box>
          <Box w="100%" h="auto" my="1.2rem">
            <SPAmenities />
          </Box>
          <Box w="100%" h="auto" my="1rem">
            <SPReviews
              rating={currentHotel.rating}
              review={currentHotel.review}
            />
          </Box>
        </Box>
      </Box>
    );
}

export default SingleProduct;