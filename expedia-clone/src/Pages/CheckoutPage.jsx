import React from "react";
import {
  Heading,
  Box,
  Text,
  Stack,
  Image,
  Link,
  Button,
  Input,
  Checkbox,
  Select,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { BsFillCloudCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const CheckoutPage = () => {
  const rooms = useSelector((state) => state.AppReducer.rooms);
  const adults = useSelector((state) => state.AppReducer.adults);
  const userData = useSelector((state) => state.AuthReducer.userData);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const navigate = useNavigate();
  const localHotel = JSON.parse(localStorage.getItem("singleHotel"));
  const price = Number(localHotel.price1.split(",").join("")) * rooms;
  const tax = (price * 18) / 100;
  const total = tax + price;
  console.log(userData);
  const addTrips = () => {
    if (isAuth) {
      const id = userData.id;
      const trip = [localHotel];
      axios.put(
        `https://636b1db9b10125b78feba23b.mockapi.io/profile/${id}`,
        trip
      )
      navigate("/");
    }
  };
  return (
    <div style={{ backgroundColor: "#f8f5f4" }}>
      <div
        style={{ width: "100%", height: "auto", backgroundColor: "#f8f5f4" }}
      >
        <div style={{ display: "grid", backgroundColor: "#f8f5f4" }}>
          <Box bg={"#f8f5f4"} m="auto" w="80%">
            <Heading m="2" textAlign="left">
              Review and book
            </Heading>
          </Box>
          <Box m="auto" marginTop="20px" w="80%" h="200px">
            <Stack w="100%" direction={["column", "row"]} spacing="20px">
              <Box bg={"#f8f5f4"} w="80%">
                <Box p={"5px"} bg={"white"} display="flex" m="auto">
                  <img
                    style={{ width: "50px", marginRight: "20px" }}
                    src="https://cdn-icons-png.flaticon.com/512/4107/4107420.png"
                  />
                  <Box textAlign="left">
                    <Text fontSize="13px" fontWeight="bold">
                      {" "}
                      Free cancellation before Tue, 22 Nov, 14:00 (property
                      local time)
                    </Text>
                    <Text fontSize="13px">
                      You can change or cancel this stay for a full refund if
                      plans change. Because flexibility matters.
                    </Text>
                  </Box>
                </Box>
                <br />
                <Box bg={"white"} padding={"10px 0px"} display="flex">
                  <Image
                    m="5px"
                    marginTop="14px"
                    marginRight="20px"
                    h="25px"
                    borderRadius={"50%"}
                    w="30px"
                    src="https://play-lh.googleusercontent.com/VobaoI-5uB6DeCqEnyjHBH_RyMGeJk7SE3pLgJPcPZWq09fa-kb5ovWPysenqUkbwA=w240-h480-rw"
                  />
                  <Link color="blue" marginTop="14px">
                    Sign in to earn 220 Expedia Rewards points
                  </Link>
                </Box>

                <Box bg={"white"} marginTop={"30px"} p={"20px"}>
                  <Box display="flex">
                    <Image
                      h="30px"
                      w="30px"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBYaoWKnbclMLZAUk2RSdohCPTmeYRkqLXXQPkPw&s"
                    />
                    <Box>
                      <Text textAlign={"left"} marginRight="5px">
                        Room {rooms}: {adults} Adults 1 King Bed
                      </Text>
                      <Box display="flex">
                        <Button
                          color="black"
                          colorScheme="none"
                          m="5px"
                          p="1px"
                        >
                          <BsFillCloudCheckFill /> Free parking
                        </Button>
                        <Button
                          color="black"
                          colorScheme="none"
                          m="5px"
                          p="2px"
                        >
                          <BsFillCloudCheckFill /> Free WiFi
                        </Button>
                      </Box>
                      <Box display="flex">
                        <Box>
                          <Text>First Name</Text>
                          <Input
                            textAlign={"center"}
                            m="5px"
                            placeholder="First Name"
                          />
                        </Box>
                        <Box marginLeft="40px">
                          <Text>Last Name</Text>
                          <Input
                            textAlign={"center"}
                            m="5px"
                            placeholder="Last Name"
                          />
                        </Box>
                      </Box>
                      <Box marginTop="10px" textAlign={"left"}>
                        <Text>Mobile phone number </Text>
                        <Box display="flex">
                          <Button>IND 91 +</Button>
                          <Input
                            marginLeft="5px"
                            placeholder="Enter Mobile Number"
                          />
                        </Box>
                      </Box>
                      <Box marginTop="10px" textAlign="left">
                        <Checkbox defaultChecked>
                          Receive text alerts about this trip (free of charge).
                        </Checkbox>
                      </Box>
                      <Box marginTop="10px" textAlign="left">
                        <Link color="blue" fontSize="13px">
                          Smoking requests (optional)
                        </Link>
                      </Box>
                      <Box textAlign="left">
                        <Link color="blue" fontSize="13px">
                          Special Requests (optional)
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box display="flex">
                    <Image
                      m="10px"
                      w="30px"
                      src="https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-classic-card-498x280.png"
                    />
                    <Box display="flex">
                      <Button color="black" colorScheme="none" m="5px" p="1px">
                        <BsFillCloudCheckFill /> We use secure transmision
                      </Button>
                      <Button color="black" colorScheme="none" m="5px" p="2px">
                        <BsFillCloudCheckFill /> We protect your personal
                        information
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    m="10px"
                    display="flex"
                    alignContent="flex-start"
                    marginLeft="50px"
                  >
                    <Button fontSize="13px" p="3px">
                      Debit Card/ Credit card
                    </Button>
                    <Button marginLeft="10px" fontSize="13px" p="3px">
                      Net Banking
                    </Button>
                  </Box>
                  <Box display="flex" marginLeft="50px">
                    <Image
                      w="50px"
                      src="https://www.axisbank.com/images/default-source/default-album/ace-credit-card.jpg"
                    />
                    <Image
                      w="50px"
                      src="https://www.lvbank.com/images/LVB-Classic-Debit-Cards.jpg"
                    />
                    <Image
                      w="50px"
                      src="https://www.lvbank.com/images/LVB-Signature-Debit-Cards.jpg"
                    />
                    <Image
                      w="50px"
                      src="https://www.lvbank.com/images/LVB-Platinum-Debit-Cards.jpg"
                    />
                  </Box>
                  <Box marginTop={"20px"} textAlign={"left"} marginLeft="50px">
                    <Text>Name on Card*</Text>
                    <Input w="400px" marginTop="10px" placeholder="Name" />
                  </Box>
                  <Box marginTop={"20px"} textAlign={"left"} marginLeft="50px">
                    <Text>Debit/Credit card number*</Text>
                    <Input w="400px" marginTop="10px" placeholder="Number" />
                  </Box>
                  <Box marginTop={"20px"} textAlign={"left"} marginLeft="50px">
                    <Text>Expiry Date</Text>
                    <Input w="400px" marginTop="10px" type="date" />
                  </Box>
                  <Box marginTop={"20px"} textAlign={"left"} marginLeft="50px">
                    <Text>Security Code</Text>
                    <Input w="400px" marginTop="10px" placeholder="Code" />
                  </Box>
                  <Box marginTop={"20px"} textAlign={"left"} marginLeft="50px">
                    <Text>Billing country/territory*</Text>
                    <Select marginTop="10px" w="400px" placeholder="India">
                      <option value="option1">Russia</option>
                      <option value="option2">America</option>
                      <option value="option3">Pakisthan</option>
                      <option value="option3">England</option>
                    </Select>
                  </Box>
                  <Box marginTop={"20px"} textAlign={"left"} marginLeft="50px">
                    <Text>PAN</Text>
                    <Input w="400px" marginTop="10px" placeholder="PAN" />
                  </Box>

                  <Box marginLeft="50px" marginTop="60px" textAlign="left">
                    <Text fontSize="16px" fontWeight="bold">
                      Manage your booking
                    </Text>
                    <div
                      style={{
                        border: "1px solid black",
                        backgroundColor: "black",
                        marginTop: "10px",
                      }}
                    />
                    <Text fontWeight="bold">Confirm your email</Text>
                    <Text>
                      Please enter the email address where you would like to
                      receive your confirmation.
                    </Text>
                    <Text marginTop={"10px"}>Email Address</Text>
                    <Input w="400px" placeholder="Email" />

                    <Checkbox defaultChecked>
                      Please send me Expedia emails with travel deals, special
                      offers and other information.
                    </Checkbox>
                    <Box m={"20px"}>
                      <hr />
                    </Box>
                    <Text>Create Your Account</Text>
                    <Box>
                      <Button
                        fontSize={"14px"}
                        color="black"
                        colorScheme="none"
                        m="5px"
                        p="1px"
                      >
                        <BsFillCloudCheckFill /> Earn points for free travel
                      </Button>
                      <Button
                        fontSize={"14px"}
                        color="black"
                        colorScheme="none"
                        m="5px"
                        p="1px"
                      >
                        <BsFillCloudCheckFill /> Save with Member Prices
                      </Button>
                      <Button
                        fontSize={"14px"}
                        color="black"
                        colorScheme="none"
                        m="5px"
                        p="1px"
                      >
                        <BsFillCloudCheckFill />
                        Easily access your itineraries
                      </Button>
                    </Box>
                    <Text fontSize={"14px"}>
                      Enter a password to create an account using the email
                      address above.
                    </Text>
                    <Box marginTop={"20px"} textAlign={"left"}>
                      <Text>Create password</Text>
                      <Input
                        w="400px"
                        marginTop="10px"
                        placeholder="Passord"
                        type={"password"}
                      />
                    </Box>
                    <Box marginTop={"20px"} textAlign={"left"}>
                      <Text>Confirm password</Text>
                      <Input
                        w="400px"
                        marginTop="10px"
                        placeholder="Passord"
                        type={"password"}
                      />
                    </Box>
                    <Text fontSize="13px">
                      By creating an account, I agree to the{" "}
                      <Link>
                        Terms of Use opens in a new window, Privacy Policy opens
                        in a new window, and Expedia Rewards Terms and
                        Conditions.
                      </Link>{" "}
                    </Text>
                    <Box marginTop={"20px"} textAlign={"left"}>
                      <Text fontWeight={"bold"}>
                        Important information about your booking{" "}
                      </Text>
                      <Box
                        w={"100%"}
                        h="250px"
                        overflow={"scroll"}
                        fontSize={"12px"}
                      >
                        <li>
                          Cancellations or changes made after 14:00 (property
                          local time) on 22 Nov 2022 or no-shows are subject to
                          a property fee equal to 100% of the total amount paid
                          for the reservation.
                        </li>
                        <li>
                          To make arrangements for check-in please contact the
                          property ahead of time using the information on the
                          booking confirmation. If you are planning to arrive
                          after midnight please contact the property in advance
                          using the information on the booking confirmation.
                          Guests must contact the property in advance for
                          check-in instructions. Front desk staff will greet
                          guests on arrival. At check-in, guests must provide a
                          record of full COVID-19 vaccination. Guests providing
                          vaccine records must have received complete COVID-19
                          vaccination at least 3 days prior to check-in. For
                          more details, please contact the property using the
                          information on the booking confirmation.
                        </li>
                        <li>
                          This property requires guests to confirm their
                          check-out date at check-in. Any modifications to the
                          check-out date will incur a fee. Early departure fees
                          apply if notice not provided; not applicable for
                          non-refundable rates.
                        </li>
                        <li>
                          To register at this property, guests who are Indian
                          citizens must provide a valid photo identity card
                          issued by the Government of India; Permanent Account
                          Number (PAN) cards will not be accepted due to
                          national regulations. Travelers who are not citizens
                          of India must present a valid passport and visa.
                          Indian citizens must show a PAN card at check-out for
                          cash transactions exceeding INR 25,000.
                        </li>
                        <li>
                          Please note that Expedia and the hotel will not issue
                          a tax invoice. You will receive a commercial receipt
                          for the purpose of the transaction.
                        </li>
                      </Box>
                      <Box marginTop={"50px"}>
                        <Text fontSize="13px">
                          By clicking on the button below, I acknowledge that I
                          have reviewed the
                          <Link>
                            {" "}
                            Privacy Statement Opens in a new window. and
                            Government Travel Advice Opens in a new window. and
                            have reviewed and accept the Rules & Restrictions
                            Opens in a new window. and Terms of Use Opens in a
                            new window..
                          </Link>
                        </Text>
                      </Box>
                      <Box marginTop={"30px"}>
                        <Button color={"black"} colorScheme={"none"}>
                          {" "}
                          <BsFillCloudCheckFill />{" "}
                          <Text marginLeft={"10px"}>
                            Change of plans? No problem. You can cancel{" "}
                            <Link> for free before Tue, 22 Nov</Link>{" "}
                          </Text>{" "}
                        </Button>
                      </Box>
                      <Button
                        onClick={addTrips}
                        m={"10px"}
                        colorScheme={"yellow"}
                      >
                        Complete Booking
                      </Button>
                    </Box>
                    <Text fontSize="13px">
                      We use secure transmission and encrypted storage to
                      protect your personal information.
                    </Text>
                    <Text fontSize="13px" marginTop={"15px"}>
                      This payment will be processed in India. This does not
                      apply when the travel provider (airline/hotel/rail, etc.)
                      processes your payment.
                    </Text>
                  </Box>
                </Box>
              </Box>
              {/* second Box */}
              <Box
                h="740px"
                bg={"white"}
                w="500px"
                textAlign={"left"}
                marginLeft={"30px"}
              >
                <Image
                  w={"100%"}
                  src="https://images.trvl-media.com/hotels/2000000/1360000/1351900/1351876/1ac59945_l.jpg"
                />
                <Box margin={"25px"}>
                  <Text>4.8/5 Exceptional (997 reviews)</Text>
                  <Text marginTop={"10px"} fontSize={"13px"}>
                    Guests rated this property 4.8/5 for cleanliness
                  </Text>
                  <Text marginTop={"15px"}>
                    {rooms} Room: Superior Room City View
                  </Text>
                  <Text fontSize={"12px"}>Check-in: Thu, 24 Nov</Text>
                  <Text fontSize={"12px"}>Check-out: Fri, 25 Nov</Text>
                  <Text fontSize={"12px"}>1-night stay</Text>
                </Box>

                <Box m="25px" marginTop={"30px"}>
                  <Text fontWeight={"bold"}>Price details</Text>
                  <hr />
                  <Flex marginTop="20px">
                    <Box>{rooms || 1} room x 1 night</Box>
                    <Spacer />
                    <Box>₹{price}</Box>
                  </Flex>
                  <Flex marginTop="20px">
                    <Box>Taxes and service fees</Box>
                    <Spacer />
                    <Box>₹{tax}</Box>
                  </Flex>
                  <hr />
                  <Flex marginTop="20px">
                    <Box>
                      <Text fontWeight={"bold"}>Total</Text>
                    </Box>
                    <Spacer />
                    <Box>
                      <Text fontWeight={"bold"}>₹{total}</Text>
                    </Box>
                  </Flex>
                  <Text marginTop={"30px"}>
                    <Link fontSize={"14px"}>
                      Use a coupon, credit, or promotion code
                    </Link>
                  </Text>
                  <Text fontSize={"13px"}>
                    Trip total includes GST that Expedia pays to its vendors
                    (e.g. Hotels). We retain our service fee for facilitating
                    your travel reservation. For details please see our terms of
                    use.
                  </Text>
                </Box>
              </Box>
            </Stack>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
