import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import Footer from "../Footer";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { auth } from "./login";
const Applied = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://volnowbackend.up.railway.app/volunteer/getappliedJobs")
      .then((res) => {
        setData(JSON.parse(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Text
        fontSize={"40"}
        fontWeight={"600"}
        textAlign={"center"}
        m={"40px"}
        fontFamily={"poppins"}
      >
        {data.length == 0
          ? "You haven't applied for anything yet!"
          : "Oportunities you have applied for"}
      </Text>
      <Box w={"80%"} m={"auto"}>
        <SimpleGrid
          spacing={10}
          columns={[1, 2, 3]}
          // m={"80px auto"}
          w={"100%"}
          mt={"50px"}
          mb={"100px"}
        >
          {data?.map((el) => (
            <Box
              // position={"relative"}
              bg={"#f5f5f5"}
              //   m={"auto"}
              borderRadius={"30px"}
              //   p={"10px"}
              //   h={"400px"}
            >
              <Image
                // position={"static"}
                src={el.image}
                w={"60%"}
                h={"40%"}
                m={"10px"}
                mt={"30px"}
                margin={"auto"}
              ></Image>
              <Text
                // position={"static"}
                mt={"60px"}
                // mb={"60px"}
                fontSize={"18px"}
                textAlign={"center"}
              >
                {el.title}
              </Text>
              <Text
                // position={"static"}
                mt={"10px"}
                // mb={"60px"}
                fontSize={"14px"}
                textAlign={"center"}
              >
                {el.location}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </div>
  );
};

export default Applied;
