import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import {useEffect, useState } from "react"
import Stack from '@mui/material/Stack';
const SearchBar = () => {
    var temp = []
    const [productsSearch, setProductSearch] = useState([])
    const [productfound, setProductFound] = useState([])
    const [searchProduct, setSearchProduct] = useState("")
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND}/products`)
          .then((response) => response.json())
          .then((json) => {
            setProductFound(json.Products)
              
              json.Products.forEach((e)=>{
                  e.id = e._id
                  e.label = e.name
                  delete e.quantity
                  delete e.category
                  delete e.description
                  delete e.bestSeller
                  delete e.picurl
                  delete e.price
                  delete e.__v
                  delete e.dateCreated
                  delete e._id
                  delete e.name
                  temp.push(e)

              })
              setProductSearch(temp)
           console.log(temp)
           
          })
          .catch((err) => {
            console.log(`err ${err}`);
          });
      }, []);

    return (
        <form>
          <Stack spacing={2} direction="row">

        
             <Autocomplete
                freeSolo
                id="combo-box-demo"
                options={productsSearch}
                sx={{ width: 300, xs:"fullWidth", paddingTop:"10px", borderColor:"#ee352a" }}
                renderInput={(params) => <TextField 
                    error
                    style={{borderColor:"red"}}
                     {...params} label="Search Products.." 
                     onChange={(event)=>setSearchProduct(event.target.value)}
                     />}
                     
                
                />
                
                <IconButton style={{zIndex:"1", right:"73px", backgroundColor:"#ee352a", height:"55px", top:10, borderRadius:"0px"}}>
                    <SearchIcon sx={{ fontSize: 40, color:"white" }} />
                </IconButton>
               
                
                </Stack>
                 
                
               
              
        </form>
    )
}

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 } ]
export default SearchBar
