import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Container,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";

function Trips() {
  const [isLoading, setIsLoading] = useState(true);
  const [trips, setTrips] = useState([]);

  const userData = useSelector((store) => store.AuthReducer.userData);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const id = userData.id;
    axios
      .get(`https://636b1db9b10125b78feba23b.mockapi.io/profile/${id}`)
      .then((res) => {
        // console.log(res.data.trip);
        setTrips(res.data.trip);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Flex justify="center" mt={"5"}>
          <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#3182ce"
            size="lg"
          />
        </Flex>
      ) : (
        <Container maxW="container.xl" mt="10">
          <TableContainer
            border="1px"
            borderColor="gray.200"
            borderRadius="10px"
            marginTop="50"
          >
            <Table variant="simple">
              <Thead>
                <Tr bgColor="#2490fe">
                  <Th color="white">Sr.No</Th>
                  <Th color="white">Hotel Name</Th>
                  <Th color="white">Rooms Book</Th>
                  <Th color="white">Total Adults</Th>
                  <Th color="white">Total Children</Th>
                  <Th color="white">Total Amount (Rs)</Th>
                  <Th color="white">Checkin Date</Th>
                  <Th color="white">Checkout Date</Th>
                  <Th color="white">Transaction Id</Th>
                </Tr>
              </Thead>
              <Tbody>
                {trips.length > 0
                  ? trips.map((e, i) => (
                      <Tr
                        key={e._id}
                        _hover={{
                          bgColor: "#f7f9fb",
                          cursor: "pointer",
                        }}
                      >
                        <Td>{i + 1}</Td>
                        <Td>
                          {e.heading1}, {e.city}
                        </Td>
                        <Td>{e.rooms}</Td>
                        <Td>{e.adults}</Td>
                        <Td>{e.child}</Td>
                        <Td>{e.amount}</Td>
                        <Td>{e.checkInDate}</Td>
                        <Td>{e.checkOutDate}</Td>
                        <Td>123456789{e.id}</Td>
                      </Tr>
                    ))
                  : null}
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </>
  );
}

export default Trips;
