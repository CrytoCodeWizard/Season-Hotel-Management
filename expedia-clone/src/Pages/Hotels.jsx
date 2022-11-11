import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import SimpleCard from "../Components/SimpleCard";
const Hotels = () => {
  const hotels = useSelector((state) => state.hotels);
  console.log(hotels);
  return (
    <Grid templateColumns={"1"} gap={10} width={"70%"} margin="auto">
      {hotels.length > 0 &&
        hotels.map((item) => {
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
  );
};

export default Hotels;
