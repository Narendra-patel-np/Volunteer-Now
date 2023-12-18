import React, { useState } from "react";
import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export let auth = false;
const Login = () => {
  const Navigate = useNavigate();
  // let [auth, setAuth] = useState(false);
  const loginUser = {
    email: "",
    password: "",
  };
  let LogUser;
  const [user, setUser] = useState(loginUser);
  const handleChange = (e) => {
    LogUser = {
      ...user,
      [e.target.name]: e.target.value,
    };
    // console.log(LogUser);
    setUser(LogUser);
  };
  const Login = (e) => {
    e.preventDefault();
    if (auth) {
      auth = false;
      axios
        .get("https://volnowbackend.up.railway.app/users/logout")
        .then((res) => {
          alert(JSON.stringify(res.data.msg));
        });
    } else {
      if (JSON.stringify(user) === JSON.stringify(LogUser)) {
        alert("Please fill the details");
      } else {
        axios
          .post("https://volnowbackend.up.railway.app/users/login", user)
          .then((res) => {
            console.log(res);
            alert(JSON.stringify(res.data.msg));
            if (res.data?.token !== undefined) {
              auth = true;
            }
            setUser(loginUser);
          })
          .then((data) => {
            Navigate("/");
            console.log("auth", auth);
          });
        //
      }
    }
    // console.log(user);
  };
  return (
    <Box
      w={"25%"}
      m={"auto"}
      mt={"120px"}
      p={"12"}
      bg={"#f5f5f5"}
      borderRadius={"20"}
    >
      <Stack spacing={5}>
        <Text
          textAlign={"center"}
          fontWeight={"bold"}
          mb={2}
          fontSize={"25"}
          color={"#0b3954"}
        >
          Log in
        </Text>

        <Input
          variant="filled"
          placeholder="Email"
          type="text"
          name="email"
          _placeholder={{ color: "black" }}
          onChange={handleChange}
          value={user.email}
        />
        <Input
          variant="filled"
          placeholder="Password"
          type="password"
          name="password"
          _placeholder={{ color: "black" }}
          value={user.password}
          onChange={handleChange}
        />

        <Button
          // #0b3954
          bg={"orange.400"}
          m={"20px 5px"}
          color={"white"}
          _hover={{ bg: "#e89f22" }}
          onClick={Login}
        >
          Log In
        </Button>
      </Stack>
      <Link style={{ textDecoration: "underline" }} to="/register">
        Register
      </Link>
    </Box>
  );
};

export default Login;
