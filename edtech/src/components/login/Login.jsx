import React, { useState } from "react";
import { Box, Card, CardContent, Typography, CardActions, Button, TextField, Stack, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle login
  const handleLogIn = () => {
    const storedUser = JSON.parse(localStorage.getItem("userDetails"));

    if (storedUser && storedUser.username === userName && storedUser.password === password) {
      // Successfully logged in, navigate to home with username
      navigate('/', { state: { userName } });
    } else {
      alert("Invalid email or password");
    }
  };

  // Function to redirect to registration page
  const handleSignIn = () => {
    navigate('/signin'); // Navigate to register page
  };

  return (
    <Box display="flex"  justifyContent="center" alignItems="center" >
    <Card sx={{ backgroundColor: "#ffecd2", width: "80%", maxWidth: "500px", borderRadius: "25px" }}>
      <CardContent>
        <Box display="flex" justifyContent="center">
          <Typography gutterBottom variant="h5" component="div">
            Login
          </Typography>
        </Box>
        <Stack spacing={2}>
          <TextField
            label="userName"
            type="name"
            fullWidth
            InputProps={{ style: { borderRadius: "45px" } }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            InputProps={{ style: { borderRadius: "45px" } }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Stack>
      </CardContent>
      <CardActions>
        <Stack spacing={2} width="100%">
          <Box display="flex" justifyContent="center">
            <Button size="small" color="primary" variant="contained" onClick={handleLogIn}>
              Login
            </Button>
          </Box>
          <Box display="flex" justifyContent="center">
            <Link href="#" variant="body2">Forgot password?</Link>
            <Button size="small" color="primary" variant="outlined" onClick={handleSignIn}>
              Register Now
            </Button>
          </Box>
        </Stack>
      </CardActions>
    </Card>
  </Box>  
  );
};

export default Login;
