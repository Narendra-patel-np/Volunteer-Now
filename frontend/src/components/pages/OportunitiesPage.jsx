import Navbar from "../navbar";
import Footer from "../Footer";
import React, { useEffect, useState } from "react";
import {
  Image,
  Container,
  VStack,
  Heading,
  Grid,
  Box,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
// import axios from "axios";

const OportunitiesPage = () => {
  const [selectedJob, setSelectedJob] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // const jobs =  [
  //   {
  //     "title": "Community Cleanup",
  //     "organization": "Green Volunteers",
  //     "location": "City Park, Anytown",
  //     "description": "Join us for a community cleanup event to make our city greener!",
  //     "date": "2023-12-15",
  //     "time": "10:00 AM - 2:00 PM",
  //     "contact": {
  //       "name": "John Doe",
  //       "email": "john.doe@example.com",
  //       "phone": "555-123-4567"
  //     }
  //   },
  //   {
  //     "title": "Food Bank Assistance",
  //     "organization": "Helping Hands Foundation",
  //     "location": "123 Main St, Anytown",
  //     "description": "Assist in sorting and packaging food items at the local food bank.",
  //     "date": "2023-12-18",
  //     "time": "2:00 PM - 5:00 PM",
  //     "contact": {
  //       "name": "Jane Smith",
  //       "email": "jane.smith@example.com",
  //       "phone": "555-987-6543"
  //     }
  //   },
  //   {
  //     "title": "Animal Shelter Volunteer",
  //     "organization": "Paws and Claws Rescue",
  //     "location": "567 Oak St, Anytown",
  //     "description": "Help care for and socialize with animals at the local animal shelter.",
  //     "date": "2023-12-20",
  //     "time": "1:00 PM - 4:00 PM",
  //     "contact": {
  //       "name": "Alice Johnson",
  //       "email": "alice.johnson@example.com",
  //       "phone": "555-555-5555"
  //     }
  //   },
  //   {
  //     "title": "Senior Center Companionship",
  //     "organization": "Generations Together",
  //     "location": "Senior Center, Anytown",
  //     "description": "Spend time with seniors, engage in conversations, and assist with activities.",
  //     "date": "2023-12-22",
  //     "time": "3:00 PM - 6:00 PM",
  //     "contact": {
  //       "name": "Robert Davis",
  //       "email": "robert.davis@example.com",
  //       "phone": "555-333-4444"
  //     }
  //   },
  //   {
  //     "title": "Educational Tutoring",
  //     "organization": "Future Scholars Initiative",
  //     "location": "Local Library, Anytown",
  //     "description": "Provide tutoring and support to students in various subjects.",
  //     "date": "2023-12-25",
  //     "time": "4:00 PM - 7:00 PM",
  //     "contact": {
  //       "name": "Emily Turner",
  //       "email": "emily.turner@example.com",
  //       "phone": "555-876-5432"
  //     }
  //   },
  //   {
  //     "title": "Hospitality for Seniors",
  //     "organization": "Caring Hearts Foundation",
  //     "location": "Sunset Senior Living, Anytown",
  //     "description": "Provide hospitality to seniors, share stories, and create a warm and welcoming environment.",
  //     "date": "2023-12-20",
  //     "time": "2:00 PM - 5:00 PM",
  //     "contact": {
  //       "name": "Amanda Johnson",
  //       "email": "amanda.johnson@example.com",
  //       "phone": "555-999-8888"
  //     }
  //   },
  //   {
  //     "title": "Art Workshop for Seniors",
  //     "organization": "Creative Connections",
  //     "location": "Art Studio, Anyville",
  //     "description": "Lead an art workshop for seniors, exploring creativity through various artistic activities.",
  //     "date": "2023-12-20",
  //     "time": "2:00 PM - 5:00 PM",
  //     "contact": {
  //       "name": "Anna Rodriguez",
  //       "email": "anna.rodriguez@example.com",
  //       "phone": "555-777-8888"
  //     }
  //   },
  //   {
  //     "title": "Virtual Storytelling Session",
  //     "organization": "Digital Connections",
  //     "location": "Online",
  //     "description": "Join our virtual storytelling session for seniors. Share stories, engage in conversations, and bring joy to their day.",
  //     "date": "2023-12-22",
  //     "time": "4:00 PM - 5:30 PM",
  //     "contact": {
  //       "name": "Emma Williams",
  //       "email": "emma.williams@example.com",
  //       "phone": "555-555-1234"
  //     }
  //   },
  //   {
  //     "title": "Art and Craft Workshop",
  //     "organization": "Creative Expressions Society",
  //     "location": "Community Center, Artville",
  //     "description": "Join our art and craft workshop, unleash your creativity, and create beautiful artworks.",
  //     "date": "2023-12-20",
  //     "time": "2:00 PM - 5:00 PM",
  //     "contact": {
  //       "name": "Amanda Roberts",
  //       "email": "amanda.roberts@example.com",
  //       "phone": "555-789-0123"
  //     }
  //   },
  //   {
  //     "title": "Hospital Visitation Program",
  //     "organization": "Healthcare Harmony",
  //     "location": "City Hospital, Anytown",
  //     "description": "Brighten the day of hospital patients by providing companionship and support.",
  //     "date": "2023-12-20",
  //     "time": "2:30 PM - 5:30 PM",
  //     "contact": {
  //       "name": "Jessica Rodriguez",
  //       "email": "jessica.rodriguez@example.com",
  //       "phone": "555-777-8888"
  //     }
  //   },
  //   {
  //     "title": "Children's Art Workshop",
  //     "organization": "Creative Kids Foundation",
  //     "location": "Community Center, Anytown",
  //     "description": "Facilitate an art workshop for children, encouraging creativity and self-expression.",
  //     "date": "2023-12-20",
  //     "time": "2:00 PM - 5:00 PM",
  //     "contact": {
  //       "name": "Emma Thompson",
  //       "email": "emma.thompson@example.com",
  //       "phone": "555-999-8888"
  //     }
  //   },
  //   {
  //     "title": "Art Therapy for Seniors",
  //     "organization": "Creative Connections",
  //     "location": "Art Studio, Anytown",
  //     "description": "Engage in art therapy activities with seniors, fostering creativity and meaningful connections.",
  //     "date": "2024-01-10",
  //     "time": "2:00 PM - 5:00 PM",
  //     "contact": {
  //       "name": "Emily Rodriguez",
  //       "email": "emily.rodriguez@example.com",
  //       "phone": "555-777-8888"
  //     }
  //   },
  //   {
  //     "title": "Youth Mentorship Program",
  //     "organization": "Future Leaders Foundation",
  //     "location": "Youth Center, Anytown",
  //     "description": "Inspire and guide the next generation by participating in our youth mentorship program.",
  //     "date": "2023-12-20",
  //     "time": "4:00 PM - 7:00 PM",
  //     "contact": {
  //       "name": "Emma Thompson",
  //       "email": "emma.thompson@example.com",
  //       "phone": "555-777-8888"
  //     }
  //   },
  //   {
  //     "title": "Tech Innovation Workshop",
  //     "organization": "Innovate Tomorrow",
  //     "location": "Tech Hub, Anytown",
  //     "description": "Explore the exciting world of technology and innovation by joining our Tech Innovation Workshop. As a participant, you'll have the chance to delve into cutting-edge technologies, work on hands-on projects, and collaborate with industry professionals.",
  //     "date": "2023-12-15",
  //     "time": "2:00 PM - 5:00 PM",
  //     "contact": {
  //       "name": "Alex Mitchell",
  //       "email": "alex.mitchell@example.com",
  //       "phone": "555-999-1234"
  //     }
  //   },
  //   {
  //     "title": "Environmental Advocacy Workshop",
  //     "organization": "Green Earth Alliance",
  //     "location": "Community Center, Eco City",
  //     "description": "Play a crucial role in fostering environmental awareness by joining our Environmental Advocacy Workshop. This event aims to empower individuals with the knowledge and skills needed to make a positive impact on our planet.",
  //     "date": "2023-12-15",
  //     "time": "2:00 PM - 5:00 PM",
  //     "contact": {
  //       "name": "Alex Greenfield",
  //       "email": "alex.greenfield@example.com",
  //       "phone": "555-123-4567"
  //     }
  //   },
  //   {
  //     "title": "Environmental Stewardship Workshop",
  //     "organization": "Green Earth Alliance",
  //     "location": "Community Center, Greenfield",
  //     "description": "Be a catalyst for positive change in our community by taking part in our Environmental Stewardship Workshop. This interactive session is designed to educate and engage participants on sustainable practices, eco-friendly initiatives, and the importance of environmental conservation.",
  //     "date": "2023-12-18",
  //     "time": "2:00 PM - 5:00 PM",
  //     "contact": {
  //       "name": "Alexandra Green",
  //       "email": "alexandra.green@example.com",
  //       "phone": "555-999-1234"
  //     }
  //   },
  //   {
  //     "title": "Environmental Conservation Project",
  //     "organization": "Earth Guardians Alliance",
  //     "location": "Nature Reserve, Green Valley",
  //     "description": "Become a steward of the environment by participating in our Environmental Conservation Project. This initiative focuses on preserving and restoring natural habitats in Green Valley. Volunteers will engage in activities such as tree planting, trail maintenance, and wildlife observation. Join us in making a positive impact on our ecosystem, promoting biodiversity, and creating a sustainable future for generations to come.",
  //     "date": "2023-12-17",
  //     "time": "9:00 AM - 1:00 PM",
  //     "contact": {
  //       "name": "Sarah Miller",
  //       "email": "sarah.miller@example.com",
  //       "phone": "555-111-2222"
  //     }
  //   },
  //   {
  //     "title": "Urban Community Beautification",
  //     "organization": "City Pride Initiative",
  //     "location": "Downtown, Metropolis City",
  //     "description": "Join us in enhancing the beauty of our urban community! Volunteers are needed for a day of city beautification, including street cleaning, mural painting, and planting vibrant flowers in public spaces. Contribute to creating a cleaner, more visually appealing environment for everyone in Metropolis City. Let's come together to foster a sense of pride in our community.",
  //     "date": "2023-12-14",
  //     "time": "1:00 PM - 4:00 PM",
  //     "contact": {
  //       "name": "David Wilson",
  //       "email": "david.wilson@example.com",
  //       "phone": "555-333-5555"
  //     }
  //   },
  //   {
  //     "title": "Urban Renewal Project",
  //     "organization": "City Impact Coalition",
  //     "location": "Downtown District, MetroCity",
  //     "description": "Join the Urban Renewal Project and be a part of revitalizing our city's downtown district. Volunteers will engage in activities such as graffiti removal, park cleanup, and community beautification projects. ",
  //     "date": "2023-12-16",
  //     "time": "2:00 PM - 5:00 PM",
  //     "contact": {
  //       "name": "James Anderson",
  //       "email": "james.anderson@example.com",
  //       "phone": "555-444-5678"
  //     }
  //   },
  //   {
  //     "title": "City Beautification Initiative",
  //     "organization": "Urban Renewal Project",
  //     "location": "Downtown, Metroville",
  //     "description": "Join our City Beautification Initiative to contribute to the revitalization of Downtown Metroville. Volunteers will collaborate on projects such as mural painting, public space cleanup, and urban gardening.",
  //     "date": "2023-12-16",
  //     "time": "2:00 PM - 5:00 PM",
  //     "contact": {
  //       "name": "Michael Johnson",
  //       "email": "michael.johnson@example.com",
  //       "phone": "555-444-5555"
  //     }
  //   }
  // ]
  let token = localStorage.getItem("token");
  // console.log(token);
  const [job, setJobs] = useState([]);
  useEffect(async () => {
    fetch("https://volnowbackend.up.railway.app/volunteer/opportunities", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setJobs(data);
      });
    // axios
    //   .get("https://volnowbackend.up.railway.app/volunteer/opportunities", {
    //     headers: {
    //       "content-type": "text/json",
    //       authorization: token,
    //     },
    //   })
    //   .then((res) => {
    //     setJobs(JSON.parse(res.data));
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />

      <Container maxW="container.xl" p={4} marginBottom={"50px"}>
        <VStack spacing={4} align="stretch">
          <Heading as="h1" size="xl" mb={4}>
            Job Listings
          </Heading>

          {/* Job Cards */}
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={4}
          >
            {job.map((job) => (
              <Box
                key={job.title}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                position="relative"
                onClick={() => handleJobClick(job)}
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{ transform: "scale(1.02)" }}
              >
                <Image
                  src={job.image}
                  alt={job.title}
                  h={"250px"}
                  w={"100%"}
                  mb={4}
                  zIndex={-100}
                />

                <Heading as="h2" size="md" mb={2}>
                  {job.title}
                </Heading>
                <Text fontSize="sm" color="gray.500" mb={2}>
                  {job.organization}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {job.location}
                </Text>
              </Box>
            ))}
          </Grid>

          {/* Job Details Modal */}
          <Modal isOpen={isModalOpen} onClose={closeModal} size="lg">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{selectedJob?.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Image
                  src={selectedJob?.image}
                  alt={selectedJob?.title}
                  mb={4}
                  h={"400px"}
                />

                <Text fontSize="sm" color="gray.500" mb={4}>
                  {selectedJob?.organization} - {selectedJob?.location}
                </Text>
                <Text>{selectedJob?.description}</Text>
                <Text mt={4}>
                  <strong>Date:</strong> {selectedJob?.date},{" "}
                  <strong>Time:</strong> {selectedJob?.time}
                </Text>
                <Text mt={2}>
                  <strong>Contact:</strong> {selectedJob?.contact.name},{" "}
                  {selectedJob?.contact.email}, {selectedJob?.contact.phone}
                </Text>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={closeModal}>
                  Apply
                </Button>
                <Button colorScheme="blue" mr={3} onClick={closeModal}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </VStack>
      </Container>

      <Footer />
    </>
  );
};

export default OportunitiesPage;
