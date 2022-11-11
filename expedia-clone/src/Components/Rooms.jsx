import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";

const Rooms = () => {
  return (
    <Box w="100%">
      <Box textAlign="initial">
        <Text fontSize="2rem" fontWeight={500} lineHeight="1.5rem">
          Choose your room
        </Text>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%" bg="blue.500" border="red solid 1px"></GridItem>
      </Grid>
    </Box>
  );
};

export default Rooms;
