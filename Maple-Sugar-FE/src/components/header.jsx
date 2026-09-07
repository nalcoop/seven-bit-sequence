//Components
import * as React from 'react';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';

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
      
      <Box>
            <BottomNavigation className="navbar" showLabels value={value} onChange={(event, newValue) => { setValue(newValue);}}>

                <BottomNavigationAction 
                label="Home" icon={<RestoreIcon/>} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap:1}}
                />

                <BottomNavigationAction 
                label="Schedule" icon={<FavoriteIcon />} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap:1}}
                />

                <BottomNavigationAction 
                label="Input" icon={<LocationOnIcon />} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap:1}} 
                />

                <BottomNavigationAction 
                label="Table" icon={<LocationOnIcon />} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap:1}} 
                />
            </BottomNavigation>
      </Box>
    </header>
  )
}

export { Header }