import {useEffect, useState} from 'react'
import DisplayMain from './displaycomponents/DisplayMain'

const Category = (props) => {
    
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [productsperPage, setProductsPerPage] = useState(2)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
       
        console.log("hey")
        fetch(`http://localhost:5000/products?category=${props.category}`)
        .then(response=> response.json())
        .then(json =>{
            setProducts(json.data)
            setLoading(false)
            console.log(products)
          
        })
        .catch((err)=>{console.log(`err ${err}`)})
     
     
     }, [props.category])
    

    return (
        <DisplayMain products={products}/>
    )
}

export default Category

