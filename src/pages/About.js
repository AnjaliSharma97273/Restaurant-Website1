import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 35,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "4rem",
          },
          "& p": {
            fontSize:"1.8rem",
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <br></br>
        <p>
        Welcome to My Restaurant, where culinary artistry meets exceptional hospitality. 
        Nestled in the heart of Mumbai, we pride ourselves on offering a unique dining 
        experience that blends fresh, locally-sourced ingredients with innovative cooking techniques.
         Our dedicated team is passionate about creating a warm and inviting atmosphere for every guest,
        whether you’re here for a special occasion or a casual meal. Join us at  My Restaurant and
           savor the  Indian flavors  in every bite. We look forward to serving you!


          
        </p>
      </Box>
    </Layout>
  );
};

export default About;
