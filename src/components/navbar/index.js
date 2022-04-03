import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }} className='appbar-container'>
      <AppBar position="static" className='appbar'>
        <Toolbar  sx={{justifyContent:'flex-start'}} className='toolbar'>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, maxWidth: 'fit-content', mr:10, ml:10 }} className='link-div typography'>
            <Link to='/' className='link link-text--home'>Home</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, maxWidth: 'fit-content', mr:10, ml:10 }} className='link-div typography'>
            <Link to='/liked' className='link link-text--like'>Liked</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
