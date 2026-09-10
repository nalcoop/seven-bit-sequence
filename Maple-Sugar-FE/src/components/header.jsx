//Components
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Navbar} from '../components/navbar';

//Styles
import '../css/header.css'

const Header = () => {
    const [value, setValue] = React.useState(0);
  return (
    <header className="header">
        <Box className="webTitle">
            <h1>Maple Sugaring</h1>
            <IconButton className="bell" sx={{color:'white'}}>
              <NotificationsIcon sx={{fontSize:40}}/>
            </IconButton>
        </Box>
        <Navbar/>
    </header>
  )
}

export { Header }