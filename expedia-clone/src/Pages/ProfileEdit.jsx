import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Flex,
  Heading,
  useMediaQuery,
  Select,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { SIGNOUT } from "../Redux/AuthContext/actionTypes";

function ProfileEdit() {
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
  const [isLoading, setIsLoading] = useState(true);
  const { userData, isAuth } = useSelector((state) => {
    return {
      userData: state.AuthReducer.userData,
      isAuth: state.AuthReducer.isAuth,
    };
  }, shallowEqual);

  const [userDetails, setUserDetails] = useState({
    dob: "",
    gender: "select a gender",
    contact: "",
    email: "",
    userName: "",
    password: "",
  });

  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    if (isAuth)
      setUserDetails({
        dob: userData.dob,
        gender: userData.gender,
        contact: userData.contact,
        email: userData.email,
        userName: userData.userName,
        password: userData.password,
      });
  }, [isAuth]);

  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUserDetails({ ...userDetails, [id]: value });
  };

  const handleSignout = () => {
    setTimeout(() => {
      navigate("/login");
    }, 1500);

    dispatch({ type: SIGNOUT });
    toast({
      title: "Signout Successfull !!!",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    console.log(userData);
    console.log(userDetails);
    axios
      .put(`https://636b1db9b10125b78feba23b.mockapi.io/profile/${id}`, {
        ...userDetails,
      })
      .then((res) => {
        console.log(res);
        toast({
          title: "Profile Updated. Please Login again with new credentials !!!",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setTimeout(() => {
          handleSignout();
        }, 3500);
      })
      .catch((e) => console.log(e));

    setUserDetails({
      dob: "",
      gender: "select a gender",
      contact: "",
      email: "",
      userName: "",
      password: "",
    });
  };

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
        <Flex
          justify="center"
          align="center"
          direction="column"
          textAlign="center"
        >
          <Heading mt="7" as="h2" size="lg">
            Profile Edit
          </Heading>
          <FormControl
            w={isLargerThan992 ? "30%" : "70%"}
            borderRadius="lg"
            p={"3"}
            cursor="pointer"
            mt={3}
          >
            <FormLabel htmlFor="userName">User Name</FormLabel>
            <Input
              value={userDetails.userName}
              type="text"
              id="userName"
              onChange={(e) => {
                onChangeInput(e);
              }}
              placeholder="Enter User Name"
            />
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              value={userDetails.email}
              type="email"
              id="email"
              placeholder="Enter email here"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormLabel htmlFor="dob">Date of Birth</FormLabel>
            <Input
              value={userDetails.dob}
              type="date"
              id="dob"
              placeholder="Choose Date of Birth"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
            <FormLabel htmlFor="contact">Contact</FormLabel>
            <Input
              value={userDetails.contact}
              type="number"
              placeholder="Enter your number"
              id="contact"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
            <FormLabel htmlFor="gender">Gender</FormLabel>
            <Select
              id="gender"
              onChange={(e) => {
                onChangeInput(e);
              }}
              value={userDetails.gender}
            >
              <option>Select a Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
            <FormLabel htmlFor="password">New Password</FormLabel>
            <Input
              value={userDetails.password}
              placeholder="Enter new password"
              type="password"
              id="password"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
            <Button
              w="100%"
              mt={4}
              colorScheme="blue"
              type="submit"
              onClick={(e) => {
                handleSubmit(e, userData.id);
              }}
            >
              Submit
            </Button>
          </FormControl>
        </Flex>
      )}
    </>
  );
}

export default ProfileEdit;
