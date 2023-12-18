import React from "react";
import logo from "./images/Volnow.png";
import { Button, Heading } from "@chakra-ui/react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

export default function Footer() {

    return (
        <DIV>
         <hr />   
        <div className='main'>
            <div className='first'>
                <div className='logo'>
                    <img src={logo} alt="logo"/>
                    <Heading size={"md"} mt={"30px"}>Volunteer-Now</Heading>
                </div>
                <p>Working with others, in a spirit of generosity and mutual respect, we want to help build a world where all people can lead free and dignified lives.</p>
                <Button  bg='tomato' colorScheme='blue' color={"white"}>Donate to Volnow</Button>
            </div>
            <div className='middle' ></div>
            <div className='third'>
                <div>
                    <h4>Discover</h4>
                    <p>Jobs</p>
                    <p>Internships</p>
                    <p>Organizations</p>
                    <p>Volunteer Opportunities</p>
                    {/* <p>Grad Schools</p> */}
                    {/* <p>Site Map</p> */}
                </div>
                <div>
                    <h4>Post a Listing</h4>
                    <p>Post a Job</p>
                    <p>Sign Up</p>
                    <p>Contact US</p>
                    {/* <p>For Employers</p> */}
                    {/* <p>For Grad Schools</p> */}
                </div>
                <div>
                    <h4>Resources</h4>
                    <p>Job Seeker Tools</p>
                    <p>Career Advice</p>
                    <p>Grad Resources</p>
                    <p>Ideas for Action</p>
                    {/* <p>Logo & Design</p> */}
                    {/* <p>Newsletter</p> */}
                </div>
                <div>
                    <h4>Learn More</h4>
                    <p>About US</p>
                    <p>Our Team</p>
                    <p>Help & FAQ</p>
                    <p>Contact Us</p>
                    {/* <p>Terms of Service</p> */}
                    {/* <p>Privacy Policy</p> */}
                </div>
            </div>
        </div>
      <div className="botttom">
        <div className="icons">
          <FaTiktok className="icon" />
          <FaInstagram className="icon" />
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
        </div>
        <div>
          <p>Copyright C 2023 Volnow.org</p>
        </div>
        <div>
          <p>English | Espanol | Portugues</p>
        </div>
      </div>
    </DIV>
  );
}

const DIV = styled.div`
    .main{
         background-color: #f5f5f5; 
        /* border: 2px solid green; */
        width: 100%;
        margin: auto;
        display: flex;
        gap: 40px; 
        margin-top: 80px;
        /* color: white; */
        padding: 100px;
    }
    .middle{
        border:0.5px solid lightgray;
        transform:rotate(180deg);
        height: 300px 
    }    
    .first{
        /* border:1px solid black; */
        width:300px;
        display: grid;
        text-align: left;
        gap: 30px;
    }
    .logo{
        display: flex; 
        /* margin-left: 80px; */
    }
    .logo img{
        width: 100px;
        border-radius: 50%;
    }
    .icons{
        /* border:1px solid black; */
        display: flex;
        gap: 30px;
    }
    .icon{
        width: 40px;
        height: 30px;
    }
    .icon:hover{
        color: #3d3dd4;
    }
    .third{
        display: flex;
        gap: 80px;
        margin: 0 auto 0 auto;
        text-align: left;
    }
    .third div h4{
        font-weight: bold;
    }
    .third div{
        display: grid;

    }
    .third div p{
        cursor: pointer;
    }
    .third div p:hover{
        color: #C05621;
    }
    .botttom{
        background-color: #f5f5f5;
        width: 100%;
        padding:20px;
        margin: auto;
        justify-content: space-between;
        display: flex;
        padding-right: 85px;
        padding-left: 85px;
    }

  @media screen and (max-width: 700px) {
    .main {
      display: flex;
      flex-direction: column;
      width: 86%;
      margin: auto;
      gap: 40px;
      margin-top: 80px;
      /* color: white; */
    }
    .first {
      margin: auto;
    }
    .middle {
      display: none;
    }
    .botttom {
      width: 86%;
      margin: auto;
      margin-top: 40px;
      margin-bottom: 20px;
      display: flex;
      gap: 20px;
      flex-direction: column;
    }
    .icons {
      margin: auto;
      display: flex;
      gap: 30px;
    }
  }
`;
