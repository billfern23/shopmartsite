import {useState, useEffect} from 'react'
import Category from '../Category'
import {useLocation } from "react-router-dom"
import DisplayMain from '../displaycomponents/DisplayMain'


  
const Products = () => {

    const location = useLocation()
    const search = new URLSearchParams(location.search)
    const category = search.get('category')
    console.log(category)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)


   
    useEffect(() => {
        setLoading(true)
        fetch("http://localhost:5000/products?bestseller=yes")
        .then(response=> response.json())
        .then(json =>{
            setProducts(json.data)
            setLoading(false)
            
          
        })
        .catch((err)=>{console.log(`err ${err}`)})
     
     
     }, [])
     
  
  
    
     if(category){
        
         return (  
       
        
            <Category category={category}/> 
       
         )
     }
else {


    return (
       
       
        <DisplayMain products={products} setLoading={setLoading} />
       
     
    )
}
}

export default Products
