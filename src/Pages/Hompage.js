import ProductCategories from '../components/CategoriesTiles/ProductCategories'
import BestSeller from '../components/bestSellerscarousel/BestSeller'
import Hero from '../Hero/Hero'
//file renders product cateogories in main page, best seller
const Hompage = () => {


    return (
   <>
      

            < Hero/>
         

      
       <br /> 
       <br />
       <ProductCategories />
       <br />
      
       <BestSeller />
     
</>

    )
}

export default Hompage
