import { Box, HStack, Img, VStack } from '@chakra-ui/react';
import React from 'react'

const SPImages = () => {
  return (
    <Box w="95%">
      <HStack w="100%" h="250px">
        <HStack w="50%" h="100%">
          <Img
            w="100%"
            h="100%"
            src="https://images.trvl-media.com/hotels/13000000/12280000/12270500/12270445/0e9dd9b7.jpg?impolicy=resizecrop&rw=598&ra=fit"
          ></Img>
        </HStack>
        <HStack w="50%" h="100%">
          <VStack w="50%" h="100%">
            <Box h="48%" w="100%">
              <Img
                w="100%"
                h="100%"
                src="https://images.trvl-media.com/hotels/13000000/12280000/12270500/12270445/0e9dd9b7.jpg?impolicy=resizecrop&rw=598&ra=fit"
              ></Img>
            </Box>

            <Box h="48%" w="100%">
              <Img
                w="100%"
                h="100%"
                src="https://images.trvl-media.com/hotels/13000000/12280000/12270500/12270445/0e9dd9b7.jpg?impolicy=resizecrop&rw=598&ra=fit"
              ></Img>
            </Box>
          </VStack>
          <VStack w="50%" h="100%">
            <Box h="48%" w="100%">
              <Img
                w="100%"
                h="100%"
                src="https://images.trvl-media.com/hotels/13000000/12280000/12270500/12270445/0e9dd9b7.jpg?impolicy=resizecrop&rw=598&ra=fit"
              ></Img>
            </Box>

            <Box h="48%" w="100%">
              <Img
                w="100%"
                h="100%"
                src="https://images.trvl-media.com/hotels/13000000/12280000/12270500/12270445/0e9dd9b7.jpg?impolicy=resizecrop&rw=598&ra=fit"
              ></Img>
            </Box>
          </VStack>
        </HStack>
      </HStack>
    </Box>
  );
}

export default SPImages