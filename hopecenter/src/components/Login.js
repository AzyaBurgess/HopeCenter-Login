//Login.js
import React from "react";
import Grid from "@mui/material/Grid";
import { Paper, Avatar, TextField, Checkbox, Button, Typography, Link } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import FormControlLabel from "@mui/material/FormControlLabel";
const Login=()=> {
    const paperStyle={
        padding: "20px",
        height: "70vh",
        width: 280,
        margin: "20px auto"
    }
    const avatarStyle={
        backgroundColor:"green"
    }
    const btnstyle={
        margin:"8px 0"
    }
    const textfield={
        margin:"10px"
    }
    return(
         <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                
                <h2>The Hope Center</h2>
                <Typography>Forgot Password</Typography>
                  </Grid>
                
        <TextField label="Username" placeholder="Enter Username" fullWidth required></TextField>
        
            
            <Button
                type="Submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
                >
                    Reset Password
            </Button>
            <Typography style={textfield}>
                    <Link href="#">
                        
                    </Link>
            </Typography>
            <Typography style={textfield}>
                    <Link href="#">
                       
                    </Link>
            </Typography>
        </Paper>
        </Grid>
    )
}
export default Login;

