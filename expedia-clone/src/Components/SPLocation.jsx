import { AspectRatio, Box, Button, Collapse, Divider, HStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdLocationPin, MdSocialDistance } from "react-icons/md";
import { AiFillCar, AiOutlineCheck } from "react-icons/ai";
import { FaBusAlt, FaPlane } from "react-icons/fa";
import {TbNorthStar}from "react-icons/tb"

const SPLocation = ({name}) => {

    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);
  return (
    <>
      <Box display="flex" bg="white" my="2rem" fontSize="0.9rem">
        <Box w="40%" align="initial" p="1rem" my="0">
          <Text fontSize="1.5rem" fontWeight="500">
            About this area
          </Text>
          <Text fontSize="1.2rem" fontWeight="500">
            Candolim
          </Text>
          <Text>
            {name} Candolim Goa is located in Gauravaddo, a neighbourhood in
            Candolim, and is in the entertainment district and near the beach.
            Fort Aguada is a notable landmark, and the area's natural beauty can
            be seen at Candolim Beach and Calangute Beach. Travelling with kids?
            Consider Splashdown Waterpark and Goa Science Centre.
          </Text>
        </Box>
        <Box w="60%" p="1rem">
          <Box w="100%" height="21rem">
            <AspectRatio ratio={16 / 9}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30756.50375331118!2d73.75699953284737!3d15.507922414129336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1a3ca96d9fb%3A0xd4400f3dbaa7b588!2sCandolim%2C%20Goa!5e0!3m2!1sen!2sin!4v1668232312390!5m2!1sen!2sin" />
            </AspectRatio>
          </Box>
          <Box align="initial">
            <HStack>
              <MdLocationPin />
              <Text fontSize="1.2rem" fontWeight="500">
                What's nearby
              </Text>
            </HStack>
            <Box p="1rem">
              <Text>Candolim Beach - 8 min walk </Text>
              <Text>St. Anthony's Chapel - 10 min walk</Text>
              <Text>Calangute Beach - 14 min walk</Text>
              <Text>Poriat Football Ground - 2 min drive</Text>
            </Box>
            <br />
            <HStack>
              <AiFillCar />
              <Text fontSize="1.2rem" fontWeight="500">
                Getting around
              </Text>
            </HStack>
            <Box p="1rem">
              <HStack>
                <FaBusAlt />
                <Text>Pernem Station - 27 min drive</Text>
              </HStack>
              <HStack>
                <FaPlane />
                <Text>Dabolim Airport (GOI) - 72 min drive</Text>
              </HStack>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box p="1.2rem" bg="white" fontSize="0.9rem">
        <Box display="flex">
          <Box w="40%" align="initial">
            <Text fontSize="1.5rem" fontWeight="500">
              About this property
            </Text>
          </Box>
          <Box w="60%">
            <Text fontSize="1.2rem" fontWeight="500" align="initial">
              {name}
            </Text>
            <Box my="0.5rem">
              <Text align="initial">
                5-star luxury hotel located in Gauravaddo
              </Text>
            </Box>
            <Box>
              <Collapse startingHeight={20} in={show} align="initial">
                At {name}, you can look forward to a nightclub, a round-trip
                airport shuttle and a poolside bar. Treat yourself to a hot
                stone massage, a detox wrap or a body scrub at Conrad Spa Pune,
                the on-site spa. Be sure to enjoy a meal at any of the 6 on-site
                restaurants, which feature international cuisine and a poolside
                location. In-room WiFi (surcharge) is available to all guests,
                along with a corner/local shop and a rooftop terrace. Other
                perks at this hotel include: An outdoor pool and a children's
                pool, with free cabanas, sunloungers and pool umbrellas Free
                self-parking and valet parking Buffet breakfast (surcharge),
                express check-out and express check-in Outdoor furniture, a
                24-hour front desk and concierge services Guest reviews say
                great things about the helpful staff Room features All 351 rooms
                offer comforts, such as 24-hour room service and pillow menus,
                in addition to perks, such as laptop-compatible safes and
                laptop-friendly workspaces. Guests reviews speak well of the
                size rooms at the property. Extra amenities include:
                Rollaway/extra beds (surcharge) and free cots/infant beds
                Bathrooms with rainfall showers and deep-soaking baths Separate
                sitting areas, fridges and cookware/dishes/utensils
              </Collapse>
            </Box>
            <Button size="sm" onClick={handleToggle} mt="1rem" align="centre">
              Show {show ? "Less" : "More"}
            </Button>
          </Box>
        </Box>
        <Divider my="2rem" />
        <Box display="flex">
          <Box w="40%" align="initial">
            <Text fontSize="1.5rem" fontWeight="500">
              Cleaning and safety practices
            </Text>
          </Box>
          <Box w="60%" align="initial">
            <HStack>
              <TbNorthStar />
              <Text fontSize="1.2rem" fontWeight="500" align="initial">
                Enhanced cleanliness measures
              </Text>
            </HStack>

            <Box p="1rem">
              <Text>
                High-touch surfaces are cleaned and disinfected Sheets and
                towels are washed at 60°C or hotter
              </Text>
              <Text> Disinfectant is used to clean the property</Text>
              <Text>
                Follows the standard cleaning and disinfection practices of
                CleanStay (Hilton)
              </Text>
            </Box>
            <HStack>
              <MdSocialDistance />
              <Text fontSize="1.2rem" fontWeight="500" align="initial">
                Social distancing
              </Text>
            </HStack>

            <Box p="1rem">
              <Text>Contactless check-out</Text>
            </Box>
            <HStack>
              <AiOutlineCheck />
              <Text fontSize="1.2rem" fontWeight="500" align="initial">
                Safety measures
              </Text>
            </HStack>

            <Box p="1rem">
              <Text>Hand sanitiser provided</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default SPLocation