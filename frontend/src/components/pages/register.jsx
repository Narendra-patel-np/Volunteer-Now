import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
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
          // value={newProduct.name}
          // onChange={handleChange}
        />
        <Input
          variant="filled"
          placeholder="Email"
          type="text"
          name="email"
          _placeholder={{ color: "black" }}
          // onChange={handleChange}
          // value={newProduct.category}
        />
        <Input
          variant="filled"
          placeholder="Password"
          type="password"
          _placeholder={{ color: "black" }}
          name="password"
          // value={newProduct.price}
          // onChange={handleChange}
        />
        <Input
          variant="filled"
          placeholder="Gender"
          type="text"
          name="gender"
          _placeholder={{ color: "black" }}
          // value={newProduct.image}
          // onChange={handleChange}
        />
        <Input
          variant="filled"
          placeholder="Age"
          type="number"
          _placeholder={{ color: "black" }}
          name="age"
          // value={newProduct.brand}
          // onChange={handleChange}
        />
        <Input
          variant="filled"
          placeholder="City"
          type="text"
          _placeholder={{ color: "black" }}
          name="city"
          // value={newProduct.size}
          // onChange={handleChange}
        />
        <Button
          // #0b3954
          bg={"orange.400"}
          m={"20px 5px"}
          color={"white"}
          _hover={{ bg: "#e89f22" }}
          // onClick={AddProduct}
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
