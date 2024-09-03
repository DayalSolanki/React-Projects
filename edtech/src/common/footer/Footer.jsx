import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', padding: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>About Us</Typography>
          <Typography variant="body2">We offer the best online courses in various fields to help you excel in your career.</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Quick Links</Typography>
          <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>Home</Link>
          <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>Courses</Link>
          <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>Contact</Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Contact Us</Typography>
          <Typography variant="body2">Email: info@modernsite.com</Typography>
          <Typography variant="body2">Phone: +123 456 7890</Typography>
        </Grid>
      </Grid>
      <Box textAlign="center" sx={{ mt: 3 }}>
        <Typography variant="body2">© 2024 ModernSite. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;