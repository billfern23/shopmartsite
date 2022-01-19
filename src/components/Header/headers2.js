import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Link, useLocation} from "react-router-dom";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Logo from "../../assests/images/Logo2.png";
import {Image} from 'react-bootstrap'
import SearchBar from './SearchBar';
import SideMenu from './SideMenu'


const Header = (props) => {
  
    const location = useLocation();
    
  

    return (
    
        <>
       
        <AppBar position="static" color="transparent"
        
        sx={{ alignItems: { xs: "left", sm:"right",lg:"center"} }}
        
        >
          <Toolbar variant="regular" >
          <Box
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: {  xs: 'flex', md: 'none' } }}
          >
              
               <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
       
              color="inherit"
            >
                <SideMenu productcategory={props.productcategory}/>
             
            </IconButton>
            
              <Link to="/" >

           <Image src={Logo} style={{maxWidth:"160px"}}/>
           </Link>
          </Box>

            <Box
           
            component="div"
            sx={{ mr: 2, display: { flexGrow: 0,  xs: 'none', md: 'flex', lg:'flex', maxWidth:"200px" } }}
          >
              <Link to="/" >

            <Image src={Logo} style={{maxWidth:"200px"}}/>
              </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', lg:'flex' } }}>
         
              <SearchBar />
              </Box>
              
              <Box sx={{ flexGrow: 0, display: {xs: 'none', md:'flex'}  }}>
              <Link to="/Register" style={{textDecoration:"none"}}>   
              <Button
               
                sx={{ my: 2, color: 'black', display: 'block' }}
                style={{ color: "#EE0000", fontWeight: "bold", fontSize:"20px"
                , paddingRight:"45px"
               
            
            }}
              >
               Register

               {location.pathname === "/Register" ?    
               < FiberManualRecordIcon  style= {{fontSize : "small",
                 zIndex: "0",
                 position:"absolute",
                 left: "39%",
                 bottom: "-2",
                 color:"black"

                 }}
                 />: ""}
              </Button> 
              </Link>

            <Link to="/products" style={{textDecoration:"none"}}>   
              <Button
               
                sx={{ my: 2, color: 'black', display: 'block' }}
                style={{ color: "#EE0000", fontWeight: "bold", fontSize:"20px", paddingRight:"45px" }}
              >
               Products

               {location.pathname === "/products" ?    
               < FiberManualRecordIcon  style= {{fontSize : "small",
                 zIndex: "0",
                 position:"absolute",
                 left: "39%",
                 bottom: "-2",
                 color:"black"

                 }}
                 />: ""}
              </Button> 
              </Link>  
             
              </Box>
          </Toolbar>
        </AppBar>
     

        </>
      
    );
  }
  

export default Header
