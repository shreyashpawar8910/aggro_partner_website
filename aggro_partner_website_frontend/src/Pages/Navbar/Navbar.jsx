import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import { doLogout, getCurrentUserDetail, isLoggedIn } from '../../Services/Authantication';
import { useEffect } from 'react';


const pages = ['Market', 'Weather', 'News'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [NavigatePath, setNavigatePath] = useState(false);

  const [isSticky, setIsSticky] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {

        setIsSticky(true);

      } else {

        setIsSticky(false);

      }
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.addEventListener('scroll', handleScroll);
      }

    }
  });


  const handleOpenUserMenu = (event) => {
    // setAnchorElUser(event.currentTarget);

    navigate("/login")

  };

  const handleLogoControl = () => {
    
    navigate(NavigatePath)
    
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);

  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const [login, setLogin] = useState(false);
  const [RoleData, setRoleData] = useState(false);
  const [NameData, setNameData] = useState(false);
  

  var setRole;
  var setName ;
  

  useEffect(() => {
    setLogin(isLoggedIn());
    
    const userData = JSON.parse(localStorage.getItem("data"));
    
    if(userData){
      setRole = userData.role;
      setName = userData.firstName;
      
      setRoleData(setRole);
      setNameData(setName);
      setNameData(setName.charAt(0));

      if(setRole==="farmer"){
        setNavigatePath("/farmer")
        // navigate("/farmer")

      }else if(setRole==="customer"){
        setNavigatePath("/customer")
        // navigate("/customer")

      }else if(setRole==="instructor"){
        setNavigatePath("/instructor")
        // navigate("/instructor")
      }else if(setRole==="admin"){
        setNavigatePath("/admin")
      }
    }else{
      setNavigatePath("/")
    }

  

  },[login])


  const handleLogout =()=>{
    doLogout();
    navigate("/");
    window.location.reload();
  }

  return (
    <AppBar position="static" sx={{ bgcolor: "#9BCF53" }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'WATCHER',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <div className='items-center flex flex-col ml-5 mr-5' onClick={handleLogoControl}>

              <p>Aggro </p>
              <p>Partner</p>
            </div>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <p>Aggro </p>
            <p>Partner</p>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Button

              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <a href='https://market.todaypricerates.com/vegetables-daily-price'>Market</a>
            </Button>

            <Button

              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <a href='https://www.accuweather.com/en/in/india-weather'>Weather</a>
            </Button>

            <Button

              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <a href='https://agrinews.in/'>News</a>
            </Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>

                {
                  NameData ?(
                  <Avatar onClick={handleOpenUserMenu} alt="Remy Sharp" sx={{ bgcolor: "green" }} >{NameData}</Avatar>
                 ):(
                  <Avatar onClick={handleOpenUserMenu} alt="Remy Sharp" sx={{ bgcolor: "green" }} ><LoginIcon /></Avatar>
                 )
                 }
                
                &nbsp;&nbsp;&nbsp;

                {login && <Avatar onClick={handleLogout} alt="Remy Sharp" sx={{ bgcolor: "red" }} ><LogoutIcon /></Avatar>}

                <p></p>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>

                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

