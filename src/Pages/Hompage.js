
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Banner from '../components/Hero/Banner'
import Hero from '../components/Hero/Hero'
import CategoriesTiles from '../components/CategoriesTiles/ProductCategories'
import BestSeller from '../components/bestSellersCarousel/BestSeller'
import {  useContext } from "react";
import LoadingContext from "../context/LoadingContext"
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.transparent,
   boxShadow: "none"
  }));

const HomePage = () => {
  const {Loading} = useContext(LoadingContext);
    return (
      <Box sx={{ width: '100%' }}> 
      {Loading === true ? "" :  
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
      <Grid item xs={12} container justifyContent="center" alignItems="center">
          <Item><Banner /></Item>
        </Grid>
        <Grid item xs={12}>
          <Item><Hero /></Item>
        </Grid>
        <Grid item xs={12} container justifyContent="center" alignItems="center">
          <Item><CategoriesTiles /></Item>
        </Grid>
     
        <Grid item xs={12}>
          <Item><BestSeller /></Item>
        </Grid>
      
      </Grid>
      }
    </Box>
    )
}

export default HomePage
