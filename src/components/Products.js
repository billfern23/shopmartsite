import {useState, useEffect} from 'react'
import Category from './Category'
import {useLocation, withRouter } from "react-router-dom"
import DisplayMain from './displaycomponents/DisplayMain'
import { FaLaptopHouse } from 'react-icons/fa'


  
const Products = (history) => {

    const location = useLocation()
    const search = new URLSearchParams(location.search)
    const category = search.get('category')
    console.log(search)
    const [products, setProducts] = useState([])
    const [clearanceProducts, setClearanceProducts ] = useState([])
    const [flagClearance, setFlagClearance] = useState(false)
    const [bestSellerProducts, setbestSellerProducts ] = useState([])
    const [flagbestSellerProducts, setFlagbestSellerProducts] = useState(false)
    const [flag, setflag] = useState(true)
    useEffect(() => {
       
        fetch("http://localhost:5000/products")
        .then(response=> response.json())
        .then(json =>{
            setProducts(json.Products)
            setFlagClearance(false)
            setFlagbestSellerProducts(false)
          
        })
        .catch((err)=>{console.log(`err ${err}`)})
     
     
     }, [location])
     
    
     const ascending = ()  =>{
         let ascending = []
        if(flagClearance){
            console.log(flagClearance)
             ascending = clearanceProducts.sort((product1,product2)=> (product1.price > product2.price ? 1 : -1))
             setClearanceProducts([...ascending])
       
            }
        else if(flagbestSellerProducts){
            console.log("Best product")
            ascending = bestSellerProducts.sort((product1,product2)=> (product1.price > product2.price ? 1 : -1))
            setbestSellerProducts([...ascending])
        }
        else
        {

            ascending = products.sort((product1,product2)=> (product1.price > product2.price ? 1 : -1))
            setProducts([...ascending])
        }
     
      
     
    }

    const descending = ()  =>{
        let descending = []
        if(flagClearance){
            console.log(flagClearance)
            descending = clearanceProducts.sort((product1,product2)=> (product1.price > product2.price ? 1 : -1)).reverse()
             setClearanceProducts([...descending])
       
            }
        else if(flagbestSellerProducts){
            console.log("Best product")
            descending = bestSellerProducts.sort((product1,product2)=> (product1.price > product2.price ? 1 : -1)).reverse()
            setbestSellerProducts([...descending])
        }
        else
        {

            descending = products.sort((product1,product2)=> (product1.price > product2.price ? 1 : -1)).reverse()
            setProducts([...descending])
        }
         
      
    
    
   }
  

   const clearance = ()  =>{
    setFlagbestSellerProducts(false)   
     
    const tempClearance = products.filter(product1=> product1.category === "Clearance")
   
    setClearanceProducts([...tempClearance])
    setFlagClearance(true)
    

}


const bestsellers = ()  =>{
       
    setFlagClearance(false) 
    const tempBestsellers = products.filter(product1=> product1.bestSeller === true)
   
    setbestSellerProducts([...tempBestsellers])
    setFlagbestSellerProducts(true)

}
    
const turnOffFlags = () =>{
    setFlagClearance(false) 
    setFlagbestSellerProducts(false)
    const tempProducts = products
    setProducts([...tempProducts])

}
     if(category){
        
         return (  
                   <Category category={category}/>     
         )
     }
else {


    return (
        <>
        <br />
    
        <span style={{color:"#EE0000",fontWeight:"300px", fontSize:"50px", display:"flex", justifyContent:"center"}}> Products</span>
       
      <br />
        <DisplayMain products={flagClearance === true ? clearanceProducts :
             flagbestSellerProducts === true ? bestSellerProducts :
         
            products} ascending={ascending} 
            descending={descending} 
            clearance={clearance} 
            bestsellers={bestsellers}
            turnOffFlags={turnOffFlags}
            flag = {flag}
            flagClearance ={flagClearance}
            flagbestSellerProducts ={flagbestSellerProducts}
            /> 
             
     </>
    )
}
}

export default Products
