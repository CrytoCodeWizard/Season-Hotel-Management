import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { BsCheckSquare } from "react-icons/bs";
import { ImAccessibility } from "react-icons/im";
import { GrStatusUnknown } from "react-icons/gr";
import { GoMention } from "react-icons/go";
import { GiExtraLucid } from "react-icons/gi";
import { MdPets, MdChildFriendly } from "react-icons/md";
import { FaSpa, FaUmbrellaBeach, FaMoneyCheckAlt } from "react-icons/fa";

const SPPolicies = () => {
  return (
    <Box w="100%" display="flex" p="1rem" bg="white" fontSize="0.9rem">
      <Box w="30%" align="initial">
        <Text fontSize="1.5rem" fontWeight="500">
          Policies
        </Text>
      </Box>
      <Box w="34%" align="initial">
        <HStack>
          <BsCheckSquare />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            Check-in
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>Check-in from 3 PM - midnight</Text>
          <Text>Express check-in available</Text>
        </Box>
        <HStack>
          <ImAccessibility />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            Access methods
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>Staffed front desk </Text>
          <Text>Airport shuttle on request</Text>
        </Box>
        <HStack>
          <MdPets />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            Pets
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>No pets or service animals allowed</Text>
        </Box>
        <HStack>
          <MdChildFriendly />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            Children and extra beds
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>Children are welcome</Text>
          <Text>2 children, up to the age of 6 years</Text>
          <Text>stay for free if using existing beds </Text>
          <Text>extra beds are available for INR 2000.0 per night.</Text>
          <Text>Free cots are available on request at the property</Text>
        </Box>
        <HStack>
          <GrStatusUnknown />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            You need to know
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>Extra-person charges may apply</Text>
          <Text>
            Special requests are subject to availability upon check-in
          </Text>
          <Text>
            Safety features at this property include a fire extinguisher, a
            smoke detector
          </Text>
          <Text>Be prepared:latest COVID-19 travel requirements</Text>
          <Text>the policies listed are provided by the property</Text>
        </Box>
      </Box>
      <Box w="34%" align="initial">
        <HStack>
          <FaSpa />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            Check-out
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>Check-out before noon </Text>
          <Text>Express check-out available </Text>
        </Box>
        <HStack>
          <FaUmbrellaBeach />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            Special check-in instructions
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>property offers transfers from the airport </Text>
          <Text>surcharges may apply </Text>
          <Text>contact the property with arrival details before travel</Text>
          <Text>contact information on the booking confirmation</Text>
          <Text>Front desk staff will greet guests on arrival</Text>
          <Text>Indian citizens must provide a valid photo identity card</Text>
          <Text>foreigners must present a valid passport and visa.</Text>
          <Text>Registration at desk mandetory</Text>
        </Box>
        <HStack>
          <FaMoneyCheckAlt />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            Payment types
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>All types of credit card accepted</Text>
          <Text>All types of debit card accepted</Text>
          <Text>Online banking Accepted</Text>
          <Text>UPI and mobile wallet also accepted</Text>
        </Box>

        <HStack>
          <GoMention />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            We should mention
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>Only registered guests are allowed</Text>
          <Text>
            The property has connecting/adjoining rooms, which are subject to
            availability
          </Text>
          <Text>
            No pets and no service animals are allowed at this property
          </Text>
        </Box>
        <HStack>
          <GiExtraLucid />
          <Text fontSize="1.2rem" fontWeight="500" align="initial">
            Optional extras
          </Text>
        </HStack>
        <Box p="1.2rem">
          <Text>Fee for buffet breakfast: INR 1100</Text>
          <Text>Fee for in-room wireless Internet: INR 750</Text>
          <Text>Airport shuttle fee: INR 1750 per vehicle</Text>
          <Text>Rollaway bed fee: INR 2500.0 per night</Text>
          <Text>The above list may not be comprehensive</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SPPolicies;
