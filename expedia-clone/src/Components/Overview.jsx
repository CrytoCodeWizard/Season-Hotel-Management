import { AspectRatio, Box, HStack, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { RiParkingFill } from "react-icons/ri";
import {
  MdOutlinePool,
  MdHotTub,
  MdAir,
  MdLocalLaundryService,
  MdLocationOn,
  MdOutlineAirplanemodeActive,
} from "react-icons/md";
import { FaSpa } from "react-icons/fa";

const Overview = () => {
  return (
    <Box w="100%">

      <Box p="1rem" h="auto"  display={"flex"} >
        <Box w="65%" h="100%"  lineHeight={"1.7rem"}>
          <Text fontWeight={500} fontSize="2rem" align="initial">
            Conrad Pune by Hilton
          </Text>
          <HStack w="90px" h="4%" my="1rem">

            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />

          </HStack>
          <Box>
            <Text fontSize="1.25rem" fontWeight={500} align="initial">

              4.7/5 Exceptional
            </Text>
            <Text fontSize="0.875rem" fontWeight={400} align="initial">
              Guests rated this property 4.7/5 for cleanliness.
            </Text>
            <Link>
              <Text fontSize="0.875rem" fontWeight={400} align="initial">
                See All Reviews
              </Text>
            </Link>
          </Box>

          <Box my="4px">
            <Text fontSize="1.25rem" fontWeight={500} align="initial">
              Popular Amenities
            </Text>
            <HStack my="4px">

              <VStack align="initial" w="50%">
                <HStack>
                  <RiParkingFill />
                  <Text>Parking included</Text>
                </HStack>
                <HStack>
                  <MdOutlinePool />
                  <Text>Pool</Text>
                </HStack>
                <HStack>
                  <MdHotTub />
                  <Text>Hot Tub</Text>
                </HStack>
              </VStack>
              <VStack align="initial" w="50%">
                <HStack>
                  <FaSpa />
                  <Text>Spa</Text>
                </HStack>
                <HStack>
                  <MdAir />
                  <Text>Air Condition</Text>
                </HStack>
                <HStack>
                  <MdLocalLaundryService />
                  <Text>Laundry</Text>
                </HStack>
              </VStack>
            </HStack>
          </Box>
        </Box>
        <Box w="35%" height="100%">
          <Box w="100%" height="55%">
            <AspectRatio ratio={16 / 12}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30756.50375331118!2d73.75699953284737!3d15.507922414129336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1a3ca96d9fb%3A0xd4400f3dbaa7b588!2sCandolim%2C%20Goa!5e0!3m2!1sen!2sin!4v1668232312390!5m2!1sen!2sin" />
            </AspectRatio>
            <Box p="0.8rem" align="initial" w="85%">
              <Text fontSize="0.8rem">
                Anna Waddo Main Candolim Road, Candolim, Goa, 403515
              </Text>
            </Box>
          </Box>

          <Box w="100%" height="40%" my="0.5rem">

            <Text fontSize="1.25rem" fontWeight={500} align="initial">
              Explore the Area
            </Text>
            <VStack align="initial">
              <HStack>
                <MdLocationOn />
                <Text fontSize="0.875rem" fontWeight={400} align="initial">
                  Candolim Beach - 11 min walk
                </Text>
              </HStack>
              <HStack>
                <MdLocationOn />
                <Text fontSize="0.875rem" fontWeight={400} align="initial">
                  St. Anthony's Chapel - 15 min walk
                </Text>
              </HStack>
              <HStack>
                <MdOutlineAirplanemodeActive />
                <Text fontSize="0.875rem" fontWeight={400} align="initial">
                  Goa (GOI-Dabolim) - 30 min Drive
                </Text>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
