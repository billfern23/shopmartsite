import {useEffect, useState} from 'react'
import DisplayMain from './displaycomponents/DisplayMain'

const Category = (props) => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [productsperPage, setProductsPerPage] = useState(2)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/products?category=${props.category}`)
        .then(response=> response.json())
        .then(json =>{
            setProducts(json.data)
            setLoading(false)
            
          
        })
        .catch((err)=>{console.log(`err ${err}`)})
     
     
     }, [])


    return (
        <DisplayMain products={products}/>
    )
}

export default Category

