import React, { useState } from "react";
import { Box, Card, CardContent, Typography, CardActions, Button, TextField, Stack} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  // Function to save user details
  const saveUserDetails = (userDetails) => {
    // Saving user details in localStorage
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  };

  // Function to handle signup
  const handleSignup = () => {
    if (!email || !password || !username || !confirmPassword) {
      alert('Complete all details for registration');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Save user details to localStorage
    const userDetails = {
      email,
      username,
      password,
    };

    saveUserDetails(userDetails);
    navigate('/login'); // Navigate to the login after signup
  };

  return (
    <Box display="flex"  justifyContent="center" alignItems="center" >    
        <Card sx={{ backgroundColor: "#ffecd2", width: "80%", maxWidth: "500px", borderRadius: "25px" }}>
          <CardContent>
            <Box display="flex" justifyContent="center">
              <Typography gutterBottom variant="h5" component="div">
                Signup
              </Typography>
            </Box>
            <Stack spacing={2}>
              <TextField
                label="Username"
                value={username}
                type="text"
                fullWidth
                InputProps={{ style: { borderRadius: "45px" } }}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label="Email"
                value={email}
                type="email"
                fullWidth
                InputProps={{ style: { borderRadius: "45px" } }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                value={password}
                type="password"
                fullWidth
                InputProps={{ style: { borderRadius: "45px" } }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                label="Confirm Password"
                value={confirmPassword}
                type="password"
                fullWidth
                InputProps={{ style: { borderRadius: "45px" } }}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Stack>
          </CardContent>
          <CardActions>
            <Stack spacing={2} width="100%">
              <Box display="flex" justifyContent="center">
                <Button size="small" color="primary" variant="contained" onClick={handleSignup}>
                  Signup
                </Button>
              </Box>
            </Stack>
          </CardActions>
        </Card>
    </Box>  
  );
};

export default Register;
