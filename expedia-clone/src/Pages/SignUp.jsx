import React, { useState, useEffect } from "react";
import { AiFillApple } from "react-icons/ai"; // FcGoogle
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SignUpFunction } from "../Redux/action";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Heading,
  Input,
  Spinner,
  Select,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";

export default function CreateAccount() {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  function SendSignInRequest() {
    dispatch(
      SignUpFunction({
        email: email,
        password: password,
        userName: userName,
        userType: userType,
      })
    );
  }

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
          textAlign="left"
        >
          <Heading mt="10" as="h2" size="lg">
            Create an account
          </Heading>

          <FormControl
            w={isLargerThan992 ? "30%" : "70%"}
            borderRadius="lg"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            p={"3"}
            cursor="pointer"
            mt={5}
          >
            {/* Name */}
            <FormLabel htmlFor="userName">Enter Your Name</FormLabel>
            <Input
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter User Name"
              w={"100%"}
              h={"40px"}
              border={`2px solid`}
              type={"text"}
              mb={"8px"}
              id="userName"
            />
            {/* email */}
            <FormLabel htmlFor="email">Enter Email</FormLabel>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email address"
              w={"100%"}
              h={"40px"}
              border={`2px solid`}
              type={"email"}
              id="email"
            />
            <FormHelperText mb={"8px"}>
              We'll never share your email.
            </FormHelperText>
            {/* UserType */}
            <FormLabel htmlFor="userType">User Type</FormLabel>
            <Select
              onChange={(e) => setUserType(e.target.value)}
              width={"100%"}
              h={"40px"}
              border={`2px solid`}
              mb={"8px"}
              id="userType"
            >
              <option value="">Choose User Type</option>
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </Select>
            {/* password */}
            <FormLabel htmlFor="password">Enter Password</FormLabel>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              w={"100%"}
              h={"40px"}
              border={`2px solid`}
              type={"password"}
              mb={"8px"}
              id="password"
            />
            <Checkbox size={"lg"} defaultChecked>
              Keep me signed in
            </Checkbox>
            <br />
            <FormHelperText fontSize={"15px"} mb={"8px"}>
              By signing in, I agree to the allSeasonHOTELS{" "}
              <span style={{ color: "blue", cursor: "pointer" }}>
                Terms and Conditions, Privacy Statement
              </span>{" "}
              and{" "}
              <span style={{ color: "blue", cursor: "pointer" }}>
                allSeasonHOTELS Rewards
              </span>
            </FormHelperText>

            <Button
              onClick={SendSignInRequest}
              w={"100%"}
              h={"40px"}
              mt={4}
              colorScheme="blue"
              type="submit"
            >
              Create Account
            </Button>

            <Text mt={"15px"} display="flex" justifyContent={"center"}>
              <Link to={""} style={{ color: "blue" }}>
                Forgot password?
              </Link>
            </Text>

            <Text mt={"15px"} display="flex" justifyContent={"center"}>
              Already have an account?
              <Link to={"/signin"} style={{ color: "blue" }}>
                {" "}
                Sign In
              </Link>
            </Text>

            <Text mt={"25px"} display="flex" justifyContent={"center"}>
              or continue with
            </Text>
            <Box mt={"10px"} display="flex" justifyContent={"center"}>
              <AiFillApple
                size={"25px"}
                style={{ marginRight: "10px", cursor: "pointer" }}
              />
              <FcGoogle
                size={"25px"}
                style={{ marginRight: "10px", cursor: "pointer" }}
              />
              <AiFillFacebook
                size={"25px"}
                style={{ marginRight: "10px", cursor: "pointer" }}
                color={"blue"}
              />
            </Box>
          </FormControl>
        </Flex>
      )}
    </>
  );
}
