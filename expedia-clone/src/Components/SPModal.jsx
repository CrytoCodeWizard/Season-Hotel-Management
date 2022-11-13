import React from 'react'
import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Img,
  ListItem,
  OrderedList,
  Radio,
  RadioGroup,
  Stack,
  Text,
  UnorderedList,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const SPModal = ({ price1 }) => {
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        bg="#3662D8"
        color="white"
        _hover={{ bg: "#31087B" }}
        onClick={onOpen}
      >
        Reserve
      </Button>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Your payment options</ModalHeader>

          <ModalBody>
            <HStack h="4rem" my="0.5rem" lineHeight="1.1rem" fontSize="0.9rem">
              <Box>
                <Img src="https://a.travel-assets.com/travel-assets-manager/03052020/illustration__free__cancellation__sml.svg" />
              </Box>
              <Box>
                <Text fontWeight="500">
                  Fully refundable before Thu, 24 Nov
                </Text>
                <Text>
                  You can change or cancel this stay if plans change. Because
                  flexibility matters.
                </Text>
              </Box>
            </HStack>
            <HStack my="0.5rem">
              <Box w="60%">
                <Text fontWeight="500">Pay Now</Text>
                <UnorderedList fontSize="0.9rem">
                  <ListItem>
                    We will process your payment in your local currency
                  </ListItem>
                  <ListItem>You can use a valid Expedia coupon</ListItem>
                  <ListItem>
                    Please note that Expedia will not issue a tax invoice. You
                    will receive a commercial receipt for the purpose of the
                    transaction
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box w="20%"></Box>
              <Box alignItems="flex-end" w="20%">
                <Text fontWeight="700" fontSize="1.5rem" align="end">
                  ₹{price1}
                </Text>
                <Link to={`/hotels/${id}/checkout`}>
                  <Button
                    bg="#3662D8"
                    color="white"
                    _hover={{ bg: "#31087B" }}
                    my="1rem"
                    align="end"
                  >
                    Pay Now
                  </Button>
                </Link>
              </Box>
            </HStack>
            <HStack>
              <Box w="60%">
                <Text fontWeight="500">Pay when you stay</Text>
                <UnorderedList fontSize="0.9rem">
                  <ListItem>You will not be charged until your stay</ListItem>
                  <ListItem>
                    Pay the property directly in their local currency
                  </ListItem>
                  <ListItem>
                    Please note that Expedia will not issue a tax invoice. You
                    will receive a commercial receipt for the purpose of the
                    transaction. Upon request, a tax invoice would be issued by
                    the property
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box w="15%"></Box>
              <Box alignItems="flex-end" w="25%">
                <Text fontWeight="700" fontSize="1.5rem" align="end">
                  ₹{price1}
                </Text>
                <Link to={`/hotels/${id}/checkout`}>
                <Button
                  bg="#3662D8"
                  color="white"
                  _hover={{ bg: "#31087B" }}
                  my="1rem"
                >
                  Pay at Property
                </Button>
                </Link>
              </Box>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SPModal