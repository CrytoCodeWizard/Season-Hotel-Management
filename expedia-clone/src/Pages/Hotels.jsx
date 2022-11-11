import {
  Flex,
  Grid,
  GridItem,
  Box,
  Heading,
  Text,
  Checkbox,
  RadioGroup,
  Radio,
  Stack,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../Components/Footer";
import SearchBar from "../Components/SearchBar";
import SimpleCard from "../Components/SimpleCard";
const Hotels = () => {
  const hotels = useSelector((state) => state.hotels);
  const [filtered, setFiltered] = useState([]);
  const [price, setPrice] = useState(0);
  const rooms = useSelector((state) => state.rooms);
  console.log(rooms)
  useEffect(() => {
    let p;
    if (price === 0) {
      p = "9999999999";
    } else {
      p = price;
    }
    const filtering = (el) => {
      return +el.price1.split(",").join("") < +p;
    };

    setFiltered(hotels.filter(filtering));
  }, [price, hotels]);
  const handleSort = () => {
    hotels.sort((a, b) => {
      return a.price1.split(",").join("") - b.price1.split(",").join("");
    });
    setFiltered(hotels);
  };
  return (
    <>
      <div style={{ backgroundColor: "#f8f5f4" }}>
        <SearchBar />
        <br />
        <Flex justifyContent={"flex-end"} width="80%" margin={"auto"}>
          <Select
            onChange={handleSort}
            bg={"white"}
            placeholder="Sort by"
            width={"20%"}
          >
            <option value="Price">Price</option>
            <option value="Rating">Rating</option>
            <option value="Recommended">Recommended</option>
            <option value="Distance from City centre">
              Distance from City centre
            </option>
          </Select>
        </Flex>
        <br />
        <Flex justifyContent={"center"} gap="5px" width="80%" margin={"auto"}>
          <Box width={"20%"}>
            <Flex
              borderRadius={"10px"}
              height="auto"
              bg={"white"}
              margin="0px"
              direction={"column"}
              textAlign="left"
              padding={"10px"}
            >
              <Heading size="md">Filter by</Heading>
              <br />
              <Box>
                <Text fontWeight={"medium"}>Popular filters</Text>
                <Checkbox>Breakfast included</Checkbox>
                <Checkbox>Fully refundable</Checkbox>
                <Checkbox>Apart-hotel</Checkbox>
                <Checkbox>Hotel</Checkbox>
              </Box>
              <br />
              <Box>
                <Text fontWeight={"medium"}>Price per night</Text>
                <RadioGroup onChange={setPrice} value={price}>
                  <Stack direction="column">
                    <Radio value="2000">under 2000 Rs</Radio>
                    <Radio value="4000">under 4000 Rs</Radio>
                    <Radio value="8000">under 8000 Rs</Radio>
                    <Radio value="11000">under 11000 Rs</Radio>
                    <Radio value="100000000">All</Radio>
                  </Stack>
                </RadioGroup>
              </Box>
              <br />
              <Box>
                <Text fontWeight={"medium"}>Price per night</Text>
                <RadioGroup>
                  <Stack direction="column">
                    <Radio value="1">Any</Radio>
                    <Radio value="2">Wonderful 4.5+</Radio>
                    <Radio value="3">Very good 4+</Radio>
                    <Radio value="4">Good 3.5+</Radio>
                  </Stack>
                </RadioGroup>
              </Box>
              <br />
              <Flex direction={"column"} justifyContent={"left"}>
                <Text fontWeight={"medium"}>Property type</Text>
                <Checkbox>Apart-hotel</Checkbox>
                <Checkbox>Hotel</Checkbox>
                <Checkbox>Condo</Checkbox>
                <Checkbox>Apartment</Checkbox>
                <Checkbox>Villa</Checkbox>
                <Checkbox>House</Checkbox>
              </Flex>
            </Flex>
          </Box>
          <Grid marginLeft="0px" width={"80%"} templateColumns={"1"} gap={4}>
            {filtered.length > 0 &&
              filtered.map((item) => {
                return (
                  <GridItem>
                    <SimpleCard
                      src={item.img1}
                      title={item.heading1}
                      city={item.city}
                      description={item.text1}
                      text1={item.text2}
                      rating={item.rating}
                      price={item.price1}
                    />
                  </GridItem>
                );
              })}
          </Grid>
        </Flex>
      </div>
      <br />
      <Footer></Footer>
    </>

  );
};

export default Hotels;
