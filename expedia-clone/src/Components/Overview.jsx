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
      <HStack p="10px" h="400px">
        <Box w="65%" h="100%">
          <Text
            fontWeight={500}
            fontSize="2rem"
            align="initial"
            lineHeight="0.8rem"
          >
            Conrad Pune by Hilton
          </Text>
          <Box w="90px" h="4%">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </Box>
          <Box lineHeight="0.5rem">
            <Text
              fontSize="1.25rem"
              fontWeight={500}
              align="initial"
              lineHeight="0.5rem"
            >
              4.7/5 Exceptional
            </Text>
            <Text
              fontSize="0.875rem"
              fontWeight={400}
              align="initial"
              lineHeight="0.5rem"
            >
              Guests rated this property 4.7/5 for cleanliness.
            </Text>
            <Link>
              <Text fontSize="0.875rem" fontWeight={400} align="initial">
                See All Reviews
              </Text>
            </Link>
          </Box>
          <Box>
            <Text
              fontSize="1.25rem"
              fontWeight={500}
              align="initial"
              lineHeight="0.5rem"
            >
              Popular Amenities
            </Text>
            <HStack>
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.681017737!2d73.72287856712997!3d18.524890422093424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1668043421502!5m2!1sen!2sin" />
            </AspectRatio>
          </Box>
          <Box w="100%" height="40%">
            <Text fontSize="1.25rem" fontWeight={500} align="initial">
              Explore the Area
            </Text>
            <VStack align="initial">
              <HStack>
                <MdLocationOn />
                <Text fontSize="0.875rem" fontWeight={400} align="initial">
                  Tribal Museum 11 min walk
                </Text>
              </HStack>
              <HStack>
                <MdLocationOn />
                <Text
                  fontSize="0.875rem"
                  fontWeight={400}
                  align="initial"
                  lineHeight="0.5rem"
                >
                  national memorial 15 min walk
                </Text>
              </HStack>
              <HStack>
                <MdOutlineAirplanemodeActive />
                <Text
                  fontSize="0.875rem"
                  fontWeight={400}
                  align="initial"
                  lineHeight="0.5rem"
                >
                  Pune (PNQ-Lohegaon) 30 min Drive
                </Text>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default Overview;
