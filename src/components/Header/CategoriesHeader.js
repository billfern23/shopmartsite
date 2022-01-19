import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
const CategoriesHeader = (props) => {
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper', color:"red", 
        borderTop:"1px solid gray",
        borderBottom:"1px solid gray"
        }}>
        <Tabs value={value} onChange={handleChange} centered
        textColor="inherit"
         TabIndicatorProps={{
             style: { textColor: "red", color:"red",background: "red", height: "1px", top: "35px" }
            }}
        >
            
            <Tab label="Home" value="/" component={Link} to="/" />
            {
                props.productcategory.map((category)=>(
                    <Tab label={category}  value={`/products?category=${category}`}  component={Link} to={`/products?category=${category}`} />
                ))
            }
        
        </Tabs>
      </Box>
    )
}

export default CategoriesHeader
