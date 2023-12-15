import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Box, Image, Text } from "@chakra-ui/react";

const Carousal = () => {
  let Items = [
    {
      image:
        "https://cdn.filestackcontent.com/no_metadata/output=format:webp/resize=w:180,h:81,fit:max/quality=value:70/compress/cache=expiry:max/lSfwXbzaRPaoquZmDXbI",
      name: "Associate Researcher, Delhi",
    },
    {
      image:
        "https://cdn.filestackcontent.com/no_metadata/output=format:webp/resize=w:180,h:180,fit:max/quality=value:70/compress/cache=expiry:max/M3PNnkd4TaqhS6wqmsGW",
      name: "Global Development Awards",
    },
    {
      image:
        "https://cdn.filestackcontent.com/no_metadata/output=format:webp/resize=w:180,h:128,fit:max/quality=value:70/compress/cache=expiry:max/IsHMNgtiSb2JBmshGPTv",
      name: "Operations and Hub Manager",
    },
    {
      image:
        "https://cdn.filestackcontent.com/no_metadata/output=format:webp/resize=w:180,h:180,fit:max/quality=value:70/compress/cache=expiry:max/RazQJgxTuqrsGSw3bHR9",
      name: "Marine & Turtle Biologist",
    },
    {
      image:
        "https://cdn.filestackcontent.com/no_metadata/output=format:webp/resize=w:180,h:128,fit:max/quality=value:70/compress/cache=expiry:max/ZONb5GMTqy0INvpeBvMn",
      name: "Director of Residential Life",
    },
  ];
  return (
    <Box
      // bg={"red"}
      w={"75%"}
      m={"auto"}
      // h={"400px"}
      mt={"100px"}
      color={"teal.700"}
      mb={"100px"}
      fontFamily={"Poppins"}
    >
      <Text
        fontSize={"48"}
        fontWeight={"600"}
        textAlign={"center"}
        m={"40px"}
        fontFamily={"poppins"}
      >
        Oportunities provided by us
      </Text>
      <Swiper
        position={"static"}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Items.map((el) => {
          return (
            <>
              <SwiperSlide>
                <Box
                  // position={"relative"}
                  bg={"#f5f5f5"}
                  m={"auto"}
                  borderRadius={"30px"}
                  p={"20px"}
                  h={"400px"}
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
                    mb={"60px"}
                    fontSize={"18px"}
                    textAlign={"center"}
                  >
                    {el.name}
                  </Text>
                </Box>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Carousal;
