import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const SearchBarSmall = () => {
    return (
        <div>
            <Autocomplete
                freeSolo
                id="combo-box-demo"
                
                sx={{ width: "98%", paddingTop:"10px", borderColor:"#ee352a" }}
                renderInput={(params) => <TextField 
                    error
                    style={{borderColor:"gray"}}
                     {...params} label="Products" 
                   
                     />}
                     
                
                />
        </div>
    )
}

export default SearchBarSmall
