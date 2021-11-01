import {useState, useEffect} from 'react'
import ProductCard from './ProductCard'
import { Container, Row, Col, Button, Form   } from 'react-bootstrap';
import Pagination from './Pagination'
const Products = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [productsperPage, setProductsPerPage] = useState(2)
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
     
     const indexLastProduct = currentPage * productsperPage;
     const indexFirstProduct = indexLastProduct - productsperPage;
     const displayProducts = products.slice(indexFirstProduct,indexLastProduct )
  
     //total pages
     const changePage=(number) =>{
        setCurrentPage(number)
        
     }


    return (
        <Container >
          
           {

            displayProducts.map((product)=>(
                
                < ProductCard key={product._id} 
                title={product.name} 
                category={product.category} 
                price={product.price}
                description={product.description}
                img = {product.picurl}
                id ={product._id}
                currentpage ={currentPage}
                />
            )) 
            
        }
        <Pagination products={products} productsperPage={productsperPage} changePage={changePage} currentpage={currentPage}/>
        </Container>
    )
}

export default Products
