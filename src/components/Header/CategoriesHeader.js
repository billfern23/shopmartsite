import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useState} from "react"
import {Link} from "react-router-dom"
const CategoriesHeader = (props) => {
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
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
                
            <Tab label="Home" value="0" component={Link} to="/" />
            {   
                props.productcategory.map((category)=>(
                    <Tab label={category} key={Math.floor(Math.random() * 100000)} value={
                      
                      category==="Clearance"? "1": category==="Electronics"? "2"
                      : category==="Home Furniture" ? "3" : "4"
                    }
                    
                    
                     component={Link} to={`/products?category=${category}`} />
                ))
            }
        
        </Tabs>
      </Box>
    )
}

export default CategoriesHeader
