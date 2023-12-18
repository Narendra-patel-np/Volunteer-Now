import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const Navigate = useNavigate();
  const initUser = {
    name: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    age: "",
  };
  let newUser;
  const [user, setUser] = useState(initUser);
  const handleChange = (e) => {
    newUser = {
      ...user,
      [e.target.name]: e.target.value,
    };
    console.log(newUser);
    setUser(newUser);
  };
  const Register = (e) => {
    e.preventDefault();
    // console.log(user);
    if (JSON.stringify(user) === JSON.stringify(initUser)) {
      alert("Please fill the details");
    } else {
      axios
        .post("https://volnowbackend.up.railway.app/users/register", user)
        .then((res) => {
          alert(JSON.stringify(res.data));
          setUser(initUser);
        });
      Navigate("/login");
    }
  };
  return (
    <Box
      w={"30%"}
      m={"auto"}
      mt={"70px"}
      p={"12"}
      pb="30px"
      bg={"#F5F5F5"}
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
          Register Yourself
        </Text>
        <Input
          variant="filled"
          placeholder="Name"
          type="text"
          name="name"
          _placeholder={{ color: "black" }}
          value={user.name}
          onChange={handleChange}
        />
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
          _placeholder={{ color: "black" }}
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <Input
          variant="filled"
          placeholder="Gender"
          type="text"
          name="gender"
          _placeholder={{ color: "black" }}
          value={user.gender}
          onChange={handleChange}
        />
        <Input
          variant="filled"
          placeholder="Age"
          type="number"
          _placeholder={{ color: "black" }}
          name="age"
          value={user.age}
          onChange={handleChange}
        />
        <Input
          variant="filled"
          placeholder="City"
          type="text"
          _placeholder={{ color: "black" }}
          name="city"
          value={user.city}
          onChange={handleChange}
        />
        <Button
          // #0b3954
          bg={"orange.400"}
          m={"20px 5px"}
          color={"white"}
          _hover={{ bg: "#e89f22" }}
          onClick={Register}
        >
          Register
        </Button>
      </Stack>
      <Link style={{ textDecoration: "underline" }} to="/login">
        Login
      </Link>
    </Box>
  );
};

export default Register;
