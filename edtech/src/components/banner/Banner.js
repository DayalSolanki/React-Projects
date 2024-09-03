import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/002/294/868/original/digital-learning-web-banner-design-students-study-with-mobile-phone-during-online-class-online-education-digital-classroom-e-learning-concept-header-or-footer-banner-free-vector.jpg')`,
        height: '500px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        animation: 'fadeIn 2s ease-in-out'
      }}
    >
      <Box>
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Welcome to EDTech
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Explore Now
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
