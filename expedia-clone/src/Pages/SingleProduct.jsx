import React from 'react';
import { Box } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SPImages from '../Components/SPImages';
import Overview from '../Components/Overview';
import Rooms from '../Components/Rooms';
import SPLocation from '../Components/SPLocation';
import SPAmenities from '../Components/SPAmenities';
import SPReviews from '../Components/SPReviews';

const SingleProduct = () => {
    return (
      <Box bg="#F8F5F4" h="auto" w="100%">
        <Box w="75%" p={4} m="auto" h="auto">
          <Box w="100%" bg="white" my="1rem">
            <SPImages />
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
            <Overview />
          </Box>
          <Box w="100%" h="auto" my="1rem">
            <Rooms />
          </Box>
          <Box w="100%" h="auto" my="1rem">
            <SPLocation />
          </Box>
          <Box w="100%" h="auto" my="1.2rem">
            <SPAmenities />
          </Box>
          <Box w="100%" h="auto" my="1rem">
            <SPReviews />
          </Box>
        </Box>
      </Box>
    );
}

export default SingleProduct;