import React from "react";
import { Container, Typography, Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      component="footer"
      sx={{
        marginTop: "35px",
        backgroundColor: "#333",
        color: "white",
        paddingTop: 4,
        paddingBottom: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Connect with Us
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <IconButton color="inherit" href="#" target="_blank" rel="noopener">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit" href="#" target="_blank" rel="noopener">
          <TwitterIcon />
        </IconButton>
        <IconButton color="inherit" href="#" target="_blank" rel="noopener">
          <LinkedInIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        <a
          href="https://your-privacy-policy-link.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "none", marginRight: 25 }}
        >
          Privacy Policy
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "none", marginRight: 25 }}
        >
          Terms of Service
        </a>

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "none", marginRight: 25 }}
        >
          Contact Us
        </a>
      </Typography>
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        &copy; {new Date().getFullYear()} Muslin Int Ltd
      </Typography>
    </Container>
  );
};

export default Footer;
