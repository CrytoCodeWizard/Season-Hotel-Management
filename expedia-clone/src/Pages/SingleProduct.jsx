import React from 'react';
import { Box } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SPImages from '../Components/SPImages';
import Overview from '../Components/Overview';
import Rooms from '../Components/Rooms';

const SingleProduct = () => {
    return (
      <Box bg="#F8F5F4" h="auto" w="100%">
        <Box w="65%" p={4} m="auto" h="auto">
          <Box w="100%" bg="white" my="10px">
            <SPImages />
            <Box my="10px">
              <Tabs variant="line" align="Start">
                <TabList>
                  <Tab>One</Tab>
                  <Tab>Two</Tab>
                  <Tab>Three</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <p>one!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>three!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
            <Overview />
          </Box>
          <Box w="100%" h="100vh" my="1rem" border="red solid 1px">
            <Rooms />
          </Box>
        </Box>
      </Box>
    );
}

export default SingleProduct;