import { Box, Divider, HStack, Link, Progress, Text } from "@chakra-ui/react";
import React from "react";
import{AiFillLike} from "react-icons/ai"

const SPReviews = () => {
  return (
    <Box w="100%" display="flex" p="1rem" bg="white" >
      <Box w="35%" align="initial" p="1rem">
        <Box>
          <HStack>
            <Box>
              <Text fontSize="4rem" fontWeight="500">
                4.7
              </Text>
            </Box>
            <Box>
              <Text fontSize="1rem" fontWeight="500">
                Exceptional
              </Text>
              <Text color="blue" fontSize="0.8rem" fontWeight="400">
                <Link>158 Reviews</Link>
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box w="100%">
          <Box
            w="100%"
            display="flex"
            justifyContent="space-between"
            marginTop="0.3rem"
          >
            <Text fontSize="0.7rem">5 - Excellent</Text>
            <Text fontSize="0.8rem" fontWeight="500">
              130
            </Text>
          </Box>
          <Progress value={80} colorScheme="gray" size="sm" />
          <Box
            w="100%"
            display="flex"
            justifyContent="space-between"
            marginTop="0.3rem"
          >
            <Text fontSize="0.7rem">4 - Good</Text>
            <Text fontSize="0.8rem" fontWeight="500">
              20
            </Text>
          </Box>
          <Progress value={20} colorScheme="gray" size="sm" />
          <Box
            w="100%"
            display="flex"
            justifyContent="space-between"
            marginTop="0.3rem"
          >
            <Text fontSize="0.7rem">3 - Okay</Text>
            <Text fontSize="0.8rem" fontWeight="500">
              4
            </Text>
          </Box>
          <Progress value={4} colorScheme="gray" size="sm" />
          <Box
            w="100%"
            display="flex"
            justifyContent="space-between"
            marginTop="0.3rem"
          >
            <Text fontSize="0.7rem">2 - Poor</Text>
            <Text fontSize="0.8rem" fontWeight="500">
              4
            </Text>
          </Box>
          <Progress value={4} colorScheme="gray" size="sm" />
          <Box
            w="100%"
            display="flex"
            justifyContent="space-between"
            marginTop="0.3rem"
          >
            <Text fontSize="0.7rem">1 - Terrible</Text>
            <Text fontSize="0.8rem" fontWeight="500">
              2
            </Text>
          </Box>
          <Progress value={2} colorScheme="gray" size="sm" />
        </Box>
        <Box w="100%" my="1rem">
          <Box display="flex" justifyContent="space-around">
            <Box w="40%">
              <Text fontSize="1.2rem" fontWeight="500">
                4.7/5
              </Text>
              <Text>Cleanliness</Text>
            </Box>
            <Box w="40%">
              <Text fontSize="1.2rem" fontWeight="500">
                4.6/5
              </Text>
              <Text>Staff & service</Text>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-around">
            <Box w="40%">
              <Text fontSize="1.2rem" fontWeight="500">
                4.7/5
              </Text>
              <Text>Amenities</Text>
            </Box>
            <Box w="40%">
              <Text fontSize="1.2rem" fontWeight="500">
                4.6/5
              </Text>
              <Text>Property conditions</Text>
            </Box>
          </Box>
          <Box p="1rem">
            <Box w="40%">
              <Text fontSize="1.2rem" fontWeight="500">
                4.2/5
              </Text>
              <Text>EcoFriendly</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box w="65%" align="initial"  p="1rem">
        <Box w="100%">
          <Text fontSize="1.3rem" fontWeight={"500"}>
            5/5 Excellent
          </Text>
          <Text fontSize="0.9rem" fontWeight={"500"}>
            Shilpa
          </Text>
          <Text fontSize="0.9rem">27 Oct 2022</Text>
          <Text fontSize="0.7rem" lineHeight={"1.9rem"}>
            Stayed 5 nights in Oct 2022
          </Text>
          <AiFillLike />
        </Box>
        <Divider my="1rem" />
        <Box w="100%">
          <Text fontSize="1.3rem" fontWeight={"500"}>
            5/5 Excellent
          </Text>
          <Text fontSize="0.9rem" fontWeight={"500"}>
            Gopinath
          </Text>
          <Text fontSize="0.9rem">13 Oct 2022</Text>
          <br />
          <Text fontSize="0.9rem" fontWeight={"500"}>
            Very clean hotel and helpful staffs
          </Text>
          <Text fontSize="0.9rem">
            We recently stayed there for 5 days with family. The whole staffs
            and hotel was so friendly and above and beyond helpful. The property
            is so clean and very neatly maintained with great bfast and food
            choices.
          </Text>
          <Text fontSize="0.7rem" lineHeight={"1.9rem"}>
            Stayed 2 nights in Oct 2022
          </Text>
          <AiFillLike />
        </Box>
        <Divider my="1rem" />
        <Box w="100%">
          <Text fontSize="1.3rem" fontWeight={"500"}>
            4/5 Good
          </Text>
          <Text fontSize="0.9rem" fontWeight={"500"}>
            Rama
          </Text>
          <Text fontSize="0.9rem">18 Aug 2022</Text>

          <Text fontSize="0.7rem" lineHeight={"1.9rem"}>
            Stayed 4 nights in Aug 2022
          </Text>
          <AiFillLike />
        </Box>
        <Divider my="1rem" />
        <Box w="100%">
          <Text fontSize="1.3rem" fontWeight={"500"}>
            5/5 Excellent
          </Text>
          <Text fontSize="0.9rem" fontWeight={"500"}>
            Ashutosh
          </Text>
          <Text fontSize="0.9rem">13 Aug 2022</Text>
          <br />

          <Text fontSize="0.9rem">
            The Room was too good. The breakfast spread was awesome. It's in
            heart of North Goa which is a big positive. All staff were very
            polite & checkout handling by the young lady Christabel was very
            smooth.
          </Text>
          <Text fontSize="0.7rem" lineHeight={"1.9rem"}>
            Stayed 3 nights in Aug 2022
          </Text>
          <AiFillLike />
        </Box>
      </Box>
    </Box>
  );
};

export default SPReviews;
