
import { Box,  Img,  } from '@chakra-ui/react';
import React from 'react'


const SPImages = ({img1,img2,img3,img4}) => {
  return (
    <Box w="100%" my="1rem">
      <Box w="100%" h="250px" display="flex">
        <Box w="50%" h="100%" p="0.1rem">
          <Img
            w="100%"
            h="100%"
           src={img1}></Img>
        </Box>
        <Box w="50%" h="100%" display="flex">
          <Box w="50%" h="100%">
            <Box h="50%" w="100%" p="0.1rem">
              <Img
                w="100%"
                h="100%"
               src={img2}></Img>
            </Box>

            <Box h="50%" w="100%" p="0.1rem">
              <Img
                w="100%"
                h="100%"
               src={img3}></Img>
            </Box>
          </Box>
          <Box w="50%" h="100%">
            <Box h="50%" w="100%" p="0.1rem">
              <Img
                w="100%"
                h="100%"
               src={img4}></Img>
            </Box>

            <Box h="50%" w="100%" p="0.1rem">
              <Img
                w="100%"
                h="100%"
                src="https://images.trvl-media.com/hotels/13000000/12280000/12270500/12270445/0e9dd9b7.jpg?impolicy=resizecrop&rw=598&ra=fit"
              ></Img>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};


export default SPImages;

