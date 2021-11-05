import DisplayCard from './DisplayCard'
import {useState, useEffect} from 'react'
import Pagination from './Pagination'
import { Container, Row, Col, Button, Form   } from 'react-bootstrap';
const DisplayMain = (props) => {
    
    const {products} = props
    const [currentPage, setCurrentPage] = useState(1)
    const [productsperPage, setProductsPerPage] = useState(6)
    const [loading, setLoading] = useState(false)

    const indexLastProduct = currentPage * productsperPage;
    const indexFirstProduct = indexLastProduct - productsperPage;
    const displayProducts = products.slice(indexFirstProduct,indexLastProduct )

    const changePage=(number) =>{
        setCurrentPage(number)
        
     }


    return (
       
        <Container >
              <div className="row align-items-center">
 
          
           {

            displayProducts.map((product)=>(
                
                <
                     DisplayCard key={product._id} 
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
        </div>
        <Pagination products={products}
         productsperPage={productsperPage}
          changePage={changePage} 
          currentpage={currentPage}/>
        </Container>
        
    )
}

export default DisplayMain
