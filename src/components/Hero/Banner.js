
import Hero from "../../assests/images/hero.png";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
const Banner = () => {
    return (
        <>
          <br />
          <Grid item xs={12} container justifyContent="center" alignItems="center">


            <img src={Hero} alt="" style={{width:"90%", height:"auto"}}/>
          </Grid>
        </>
      
        
    )
}

export default Banner
