import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { GiArchiveRegister } from "react-icons/gi";
import { BsFillCartCheckFill } from "react-icons/bs";
import Typography from '@mui/material/Typography';
import { MdHeadphonesBattery, MdChair } from "react-icons/md";
import { BsFillHandbagFill } from "react-icons/bs";
import { RiShoppingCart2Fill } from "react-icons/ri";
export default function SwipeableTemporaryDrawer(props) {
  const [state, setState] = React.useState({left: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 230 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     <List>
        <Menu>
        <MenuItem >
                    <Link to="/" style={{textDecoration:"none"}}>Home</Link>
                </MenuItem>
        </Menu>

      <ListItem>
          <Typography variant="h5" style={{color:"#8B0000"}} >

          SHOPMART
          </Typography>
      </ListItem>

      <ListItem>
        <Link to="/" style={{textDecoration:"none"}}>
        <ListItemIcon>
                <AiFillHome size={30}  style={{color:"#ee352a"}}/>
        </ListItemIcon>
            <Button style={{color:"#ee352a"}}>Home</Button>
        </Link>
      </ListItem>

      <ListItem>
        <Link to="/Register" style={{textDecoration:"none"}}>
        <ListItemIcon>
                <GiArchiveRegister size={30}  style={{color:"#ee352a"}}/>
        </ListItemIcon>
            <Button style={{color:"#ee352a"}}>Register</Button>
        </Link>
      </ListItem>

      <ListItem>
          <Link to="/products" style={{textDecoration:"none"}}>
        <ListItemIcon>
                <RiShoppingCart2Fill size={30} style={{color:"#ee352a"}}/>
        </ListItemIcon>
        
            <Button style={{color:"#ee352a"}}>Products</Button>
        </Link>
      </ListItem>


      </List>
      <Divider />
      <List>
      <ListItem>
          <Typography variant="h5" style={{color:"#8B0000"}} >

          Categories
          </Typography>
      </ListItem>

      {props.productcategory.map((text, index)=>(
          
            <ListItem>
            <Link to={`/products?category=${text}`} style={{textDecoration:"none"}}>
            
            <ListItemIcon>
             {text === "Electronics"?  <MdHeadphonesBattery size={30} style={{color:"#ee352a"}}/>
                 
             : 
             text === "Home Furniture"? <MdChair size={30} style={{color:"#ee352a"}}/>
             
             :
             text === "Luggage"?  <BsFillHandbagFill size={30} style={{color:"#ee352a"}}/> :

             <BsFillCartCheckFill size={30} style={{color:"#ee352a"}}/>
          
     }   
     </ListItemIcon>
           
            
                <Button style={{color:"#ee352a"}}>{text}</Button>
            </Link>
        </ListItem>

       

      ))}
      

         
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}> 
          <MenuIcon style={{color:"gray"}} fontSize="large"/>
          
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}