import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Button, Box, CardMedia } from '@mui/material';
import courses from '../../assests/courses.json'

const Section = ({ title }) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <Box sx={{ padding: 3, borderradius:5}}>
      <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: "bold" }}>
        {title}
      </Typography>
      <Grid container spacing={3}>
        {courses.slice(0, showAll ? courses.length : 3).map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ minHeight: 300 }}>
              <CardMedia
                component="img"
                height="140"
                image={course.image}
                alt={course.title}
              />
              <CardContent>
                <Typography variant="h5">{course.title}</Typography>
                <Typography variant="body2">{course.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleShowMore}>
          {showAll ? "Show Less" : "More Courses"}
        </Button>
      </Box>
    </Box>
  );
};

export default Section;
