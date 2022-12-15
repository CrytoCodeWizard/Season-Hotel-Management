import React, { useState, useEffect } from "react";
import { AiFillApple } from "react-icons/ai"; // FcGoogle
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Loginfunction } from "../Redux/AuthContext/action";

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
  Select,
  Spinner,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [userObj, setUserObj] = useState([]);
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [password, setPassword] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const { isAuth } = useSelector((state) => {
    return {
      isAuth: state.AuthReducer.isAuth,
    };
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (isAuth) {
      toast({
        title: `LogIn Successfull`,
        status: "success",
        duration: 500,
        position: "top",
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [isAuth, navigate, toast]);

  useEffect(() => {
    axios
      .get("https://636b1db9b10125b78feba23b.mockapi.io/profile")
      .then((response) => {
        setUserObj(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const SendSignInRequest = () => {
    let check;

    /* Checking the email */
    let checkEmail = userObj.filter((el) => {
      return el.email === email;
    });

    /* if email is right ,Checking the password */
    if (checkEmail.length > 0) {
      let checkPassword = userObj.filter((el) => {
        return el.email === email && el.password === password;
      });
      //console.log(check[0]);

      /* if email and password is right ,Checking the userType */
      if (checkPassword.length > 0) {
        /* if userType is admin checking the employeeId */
        if (checkPassword[0].userType === "admin") {
          check = userObj.filter((el) => {
            return (
              el.email === email &&
              el.password === password &&
              el.employeeId === employeeId
            );
          });
          /* if employee is is correct */
          if (check.length > 0) {
            dispatch(
              Loginfunction({
                ...check[0],
              })
            );
          } else if (check.length === 0) {
            /*if employee id is not correct */
            toast({
              title: `Invalid Employee Id !!!`,
              status: "error",
              duration: 1500,
              position: "top",
              isClosable: true,
            });
          }
        } else if (checkPassword[0].userType === "customer") {
          /* if userType is customer disaptch */
          dispatch(
            Loginfunction({
              ...checkPassword[0],
            })
          );
        }
      } else if (checkPassword.length === 0) {
        /* if password is wrong */
        toast({
          title: `Wrong Password !!!`,
          status: "error",
          duration: 1500,
          position: "top",
          isClosable: true,
        });
      }
    } else {
      /* if email is not found */
      toast({
        title: `User not registered !!!`,
        status: "error",
        duration: 1500,
        position: "top",
        isClosable: true,
      });
    }
    setEmail("");
    setPassword("");
    setUserType("");
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
          textAlign="left"
        >
          <Heading mt="10" as="h2" size="lg">
            Sign In
          </Heading>

          <FormControl
            w={isLargerThan992 ? "30%" : "70%"}
            borderRadius="lg"
            p={"3"}
            cursor="pointer"
            mt={5}
            isRequired
          >
            {/* email */}
            <FormLabel htmlFor="email">Enter Email</FormLabel>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email address"
              w={"100%"}
              h={"40px"}
              value={email}
              border={`2px solid`}
              type={"email"}
              id="email"
            />
            <FormHelperText mb={"8px"}>
              We'll never share your email.
            </FormHelperText>

            <Select
              onChange={(e) => setUserType(e.target.value)}
              width={"100%"}
              h={"40px"}
              border={`2px solid`}
              mb={"8px"}
              value={userType}
              id="userType"
            >
              <option value="">Choose User Type</option>
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </Select>

            {userType === "admin" ? (
              <>
                <FormLabel htmlFor="email">Enter Employee Id</FormLabel>
                <Input
                  onChange={(e) => setEmployeeId(e.target.value)}
                  placeholder="Enter Email address"
                  w={"100%"}
                  h={"40px"}
                  value={employeeId}
                  border={`2px solid`}
                  type={"text"}
                  id="employeeId"
                />
              </>
            ) : null}

            {/* password */}
            <FormLabel htmlFor="password">Enter Password</FormLabel>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              w={"100%"}
              h={"40px"}
              value={password}
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
              disabled={email === "" || password === ""}
            >
              Sign In
            </Button>

            <Text mt={"15px"} display="flex" justifyContent={"center"}>
              <Link to={""} style={{ color: "blue" }}>
                Forgot password?
              </Link>
            </Text>

            <Text mt={"15px"} display="flex" justifyContent={"center"}>
              Don't have an account?{" "}
              <Link to={"/signup"} style={{ color: "blue" }}>
                Create Here...
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
