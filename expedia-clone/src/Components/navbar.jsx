import React from "react";
import Logo from "../Images/ProjectLogo.jpeg";
import { AiOutlineDown } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { BiWorld } from "react-icons/bi";
import { BsBuilding } from "react-icons/bs";
import { MdOutlineFlight, MdOutlineHolidayVillage } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { VscMultipleWindows } from "react-icons/vsc";
import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Heading,
  Icon,
  Image,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverHeader,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Spacer,
  Text,
  Tag,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { SIGNOUT } from "../Redux/AuthContext/actionTypes";

function Navbar() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 992px)");
  const [isLargerThan576] = useMediaQuery("(min-width: 576px)");
  const Navigate = useNavigate();
  const hoverColor = "#3182ce";
  const dispatch = useDispatch();
  const toast = useToast();

  const { userData, isAuth } = useSelector((state) => {
    return {
      userData: state.AuthReducer.userData,
      isAuth: state.AuthReducer.isAuth,
    };
  }, shallowEqual);

  const handleTrip = () => {
    if (isAuth) Navigate("/trips");
    else
      toast({
        title: "Please Sign in !!!",
        status: "info",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
  };

  const handleAdmin = () => {
    if (isAuth && userData.userType === "admin") Navigate("/admin");
    else
      toast({
        title: "Restricted for admins only !!!",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
  };

  const UserLoginSection = () => {
    return (
      <PopoverContent padding="5px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Image
            margin={"auto"}
            mt={5}
            src="https://a.travel-assets.com/pricing-claim/sparkle_white.svg"
            alt="priceStrike"
          />
          <Text mt={5} fontSize="18px" textAlign="left" fontWeight="bold">
            Save an average of 15% on thousands of hotels when you're signed in
          </Text>
          <Button
            mt={5}
            w="100%"
            colorScheme="blue"
            onClick={() => Navigate("/login")}
          >
            Sign in
          </Button>
          <Button
            mt={2.5}
            mb={2.5}
            w="100%"
            colorScheme="green"
            onClick={() => Navigate("/signup")}
          >
            Create a free account here
          </Button>

          <Button
            mt={2.5}
            mb={2.5}
            w="100%"
            colorScheme="blue"
            onClick={() => Navigate("/list")}
          >
            Lists of favourites
          </Button>

          <Button
            mt={2.5}
            mb={2.5}
            w="100%"
            colorScheme="blue"
            onClick={() => Navigate("/rewards")}
          >
            Expedia rewards
          </Button>
        </PopoverBody>
        <PopoverFooter>
          <Link to="#" mt={5}>
            <Text _hover={{ color: hoverColor }}>Feedback</Text>
          </Link>
        </PopoverFooter>
      </PopoverContent>
    );
  };

  const handleSignout = (e) => {
    setTimeout(() => {
      Navigate("/signup");
    }, 2000);

    dispatch({ type: SIGNOUT });
    toast({
      title: "Signout Successfull !!!",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
  };

  const SignInSignOutSection = () => {
    return (
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Center mb="2">
            <Heading size="md">Hi, {userData.userName}</Heading>
          </Center>
          <Center mb="2">
            <Heading as="h6" size="xs">
              {userData.email}
            </Heading>
          </Center>
          <Center mb="2">
            <Tag variant="solid" colorScheme="blue">
              Blue Member
            </Tag>
          </Center>
        </PopoverHeader>
        <PopoverBody>
          <Link to="/profileEdit">Account</Link>
          <br />
          <Link to="/">Lists of favourites</Link>
          <br />
          <Link to="/">Feedback</Link>
        </PopoverBody>
        <PopoverFooter>
          <Center>
            <Button
              w="100%"
              colorScheme="blue"
              onClick={(e) => {
                handleSignout(e);
              }}
            >
              Sign out
            </Button>
          </Center>
        </PopoverFooter>
      </PopoverContent>
    );
  };

  return (
    <>
      <Box
        bgColor="white"
        boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        w="100%"
        zIndex={10}
        borderBottom="1px"
        borderBottomColor="#c5c7cc"
      >
        <Container maxW="container.xl">
          <Stack direction="row">
            <Box p="1">
              <Stack direction="row" spacing={8}>
                <Link to="/">
                  <Image
                    w={"75px"}
                    height={"75px"}
                    borderRadius={"50px"}
                    src={Logo}
                    alt="allSeasonHOTELS"
                  />
                </Link>
                {isLargerThan576 ? (
                  <Menu>
                    <MenuButton
                      _hover={{ color: hoverColor }}
                      fontSize="18px"
                      fontWeight="500"
                    >
                      More travel &nbsp;
                      <Icon as={AiOutlineDown} w={4} h={4} />
                    </MenuButton>

                    <MenuList>
                      <MenuItem
                        _hover={{ color: hoverColor }}
                        icon={<BsBuilding />}
                      >
                        Stays
                      </MenuItem>
                      <MenuItem
                        _hover={{ color: hoverColor }}
                        icon={<MdOutlineFlight />}
                      >
                        Flights
                      </MenuItem>
                      <MenuItem
                        _hover={{ color: hoverColor }}
                        icon={<FaCarSide />}
                      >
                        Cars
                      </MenuItem>
                      <MenuItem
                        _hover={{ color: hoverColor }}
                        icon={<VscMultipleWindows />}
                      >
                        Packages
                      </MenuItem>
                      <MenuItem
                        _hover={{ color: hoverColor }}
                        icon={<MdOutlineHolidayVillage />}
                      >
                        Holiday activities
                      </MenuItem>
                      <MenuItem _hover={{ color: hoverColor }}>Deals</MenuItem>
                      <MenuItem _hover={{ color: hoverColor }}>
                        Groups and meetings
                      </MenuItem>
                      <MenuItem _hover={{ color: hoverColor }}>Mobile</MenuItem>
                    </MenuList>
                  </Menu>
                ) : null}
              </Stack>
            </Box>
            <Spacer />
            <Box p="6">
              {isLargerThan1280 ? (
                <Stack direction="row" spacing={8} align="center" p="1">
                  <Text
                    _hover={{ color: hoverColor }}
                    fontSize="18px"
                    fontWeight="500"
                  >
                    <Link>
                      <Icon as={BiWorld} w={4} h={4} />
                      &nbsp; English
                    </Link>
                  </Text>
                  <Text
                    _hover={{ color: hoverColor }}
                    fontSize="18px"
                    fontWeight="500"
                    cursor="pointer"
                    onClick={() => handleAdmin()}
                  >
                    Admin Support
                  </Text>
                  <Text
                    cursor="pointer"
                    fontSize="18px"
                    fontWeight="500"
                    _hover={{ color: hoverColor }}
                    onClick={() => handleTrip()}
                  >
                    Trips
                  </Text>
                  <Popover placement="bottom-end">
                    <PopoverTrigger>
                      <Text
                        cursor="pointer"
                        fontSize="18px"
                        fontWeight="500"
                        _hover={{ color: hoverColor }}
                      >
                        {isAuth ? userData.userName : "Sign In"}
                      </Text>
                    </PopoverTrigger>
                    {isAuth ? <SignInSignOutSection /> : <UserLoginSection />}
                  </Popover>
                </Stack>
              ) : (
                <Stack direction="row" spacing={8} align="center" p="1">
                  {isLargerThan576 ? null : (
                    <Menu>
                      <MenuButton>
                        <ImSearch />
                      </MenuButton>
                      <MenuList>
                        <MenuItem icon={<BsBuilding />}>Stays</MenuItem>
                        <MenuItem icon={<MdOutlineFlight />}>Flights</MenuItem>
                        <MenuItem icon={<FaCarSide />}>Cars</MenuItem>
                        <MenuItem icon={<VscMultipleWindows />}>
                          Packages
                        </MenuItem>
                        <MenuItem icon={<MdOutlineHolidayVillage />}>
                          Holiday activities
                        </MenuItem>
                        <MenuItem>Deals</MenuItem>
                        <MenuItem>Groups and meetings</MenuItem>
                        <MenuItem>Mobile</MenuItem>
                      </MenuList>
                    </Menu>
                  )}
                  <Image
                    w={"20px"}
                    objectFit="cover"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Font_Awesome_5_solid_shopping-bag.svg/1792px-Font_Awesome_5_solid_shopping-bag.svg.png"
                    alt="Trips"
                    onClick={() => handleTrip()}
                  />
                  <Popover>
                    <PopoverTrigger>
                      <Avatar
                        size="xs"
                        name="UserProfile"
                        src="http://cdn.onlinewebfonts.com/svg/img_24787.png"
                      />
                    </PopoverTrigger>
                    {isAuth ? <SignInSignOutSection /> : <UserLoginSection />}
                  </Popover>
                </Stack>
              )}
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;
