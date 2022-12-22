import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineWifi } from "react-icons/ai";
import {
  MdLocalParking,
  MdOutlineRestaurantMenu,
  MdLocalConvenienceStore,
  MdOutlineBathroom,
} from "react-icons/md";
import { IoIosToday } from "react-icons/io";
import { FaSpa, FaUmbrellaBeach, FaWheelchair } from "react-icons/fa";

const SPAmenities = () => {
  return (
    <Box w="100%" display="flex" p="1rem" bg="white" fontSize="0.9rem">
      <Box w="30%" align="initial">
        <Text fontSize="1.5rem" fontWeight="500">
          Property amenities
        </Text>
      </Box>
      <Box w="34%" align="initial">
        <HStack>
          <AiOutlineWifi />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            Internet
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>
            Available in all rooms: WiFi (INR 650 per 24-hour period), Wired
            Internet (surcharge)
          </Text>
        </Box>
        <HStack>
          <MdLocalParking />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            Parking and public transport
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>Free covered self-parking on site </Text>
          <Text>Free covered valet parking on site</Text>
          <Text>
            Wheelchair-accessible parking and van parking available 24-hour
            return airport shuttle (surcharge){" "}
          </Text>
          <Text>Airport shuttle on request</Text>
        </Box>
        <HStack>
          <MdOutlineRestaurantMenu />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            Food and drink
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>
            Buffet breakfast available for a fee weekdays 6:30 AM–10:30 AM: INR
            1200 for adults and INR 600 for children{" "}
          </Text>
          <Text>6 restaurants and 1 coffee shop/cafe</Text>
          <Text>2 bars/lounges and 1 poolside bar</Text>
          <Text>24-hour room service</Text>
        </Box>
        <HStack>
          <MdOutlineRestaurantMenu />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            Restaurants on site
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>Coriander Kitchen</Text>
          <Text>Zeera</Text>
          <Text>Masu</Text>
          <Text>Koji</Text>
        </Box>
        <HStack>
          <IoIosToday />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            Things to do
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>24-hour fitness centre</Text>
          <Text>24-hour pool access Children's pool </Text>
          <Text>Full-service spa Nightclub Outdoor pool </Text>
          <Text>Sauna Hot tub Steam room</Text>
        </Box>
        <HStack>
          <MdLocalConvenienceStore />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            Conveniences
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>Ballroom </Text>
          <Text>Lift</Text>
          <Text>Free newspapers in reception </Text>
          <Text>Front-desk safe Corner/local shop </Text>
          <Text>Library </Text>
          <Text>Vending machine</Text>
        </Box>
        <HStack>
          <MdOutlineBathroom />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            Bathroom
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>Dressing gowns</Text>
          <Text>Designer toiletries</Text>
          <Text>Hairdryer </Text>
          <Text>Private bathroom </Text>
          <Text>Rainfall showerhead </Text>
          <Text>Separate bath and shower </Text>
          <Text>Shampoo</Text>
          <Text>Soap </Text>
          <Text>Toilet paper </Text>
          <Text>Towels</Text>
        </Box>
      </Box>
      <Box w="34%" align="initial">
        <HStack>
          <FaSpa />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            Spa
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>5 treatment rooms </Text>
          <Text>Aromatherapy </Text>
          <Text>Ayurvedic treatments </Text>
          <Text>Body scrubs </Text>
          <Text>Body treatments </Text>
          <Text>Body wraps </Text>
          <Text>Couples treatment room(s) </Text>
          <Text>Detox wraps </Text>
          <Text>Facials </Text>
          <Text>Manicures and pedicures </Text>
          <Text>Massage - deep-tissue </Text>
          <Text>Massage - hot stone </Text>
          <Text>Massage - Swedish </Text>
          <Text>Massage - Thai </Text>
          <Text>Massage/treatment rooms </Text>
          <Text>Reflexology </Text>
          <Text>Sauna </Text>
          <Text>Spa open daily </Text>
          <Text>Steam room</Text>
        </Box>
        <HStack>
          <FaUmbrellaBeach />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            Outdoors
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>Free pool cabanas </Text>
          <Text>Garden </Text>
          <Text>Outdoor furniture </Text>
          <Text>Picnic area </Text>
          <Text>Pool sunloungers </Text>
          <Text>Pool umbrellas </Text>
          <Text>Rooftop terrace</Text>
        </Box>
        <HStack>
          <FaWheelchair />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            Accessibility
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>
            If you have any requests for specific accessibility needs, please
            contact the property using the information on the reservation
          </Text>
          <Text>
            confirmation received after booking. Accessible bathroom (select
            rooms)
          </Text>
          <Text>In-room accessibility (select rooms) </Text>
          <Text>Phone accessibility kit Roll-in shower (select rooms) </Text>
          <Text>Step-free path to entrance Well-lit path to entrance</Text>
          <Text>Wheelchair-accessible business centre </Text>
          <Text>Wheelchair-accessible concierge desk </Text>
          <Text>Wheelchair-accessible fitness centre </Text>
          <Text>Wheelchair-accessible lounge </Text>
          <Text>Wheelchair-accessible parking </Text>
          <Text>Wheelchair-accessible path to lift </Text>
          <Text>Wheelchair-accessible pool </Text>
          <Text>Wheelchair-accessible public bathroom </Text>
          <Text>Wheelchair-accessible registration desk </Text>
          <Text>Wheelchair-accessible restaurant </Text>
          <Text>Wheelchair-accessible spa </Text>
          <Text>Wheelchair-accessible van parking </Text>
          <Text>Wheelchair accessible (may have limitations)</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SPAmenities;
