import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const Description = () => {
    const {id} = useParams();
    
const[product, setProduct] = useState({
    name:"",
    price:0,
    description: "",
    category: "",
    quantity: 0,
    bestSeller:true,
    picurl:""
    
})

    useEffect(() => {
       
        fetch(`http://localhost:5000/product/${id}`)
        .then(response=> response.json())
        .then(json =>{
            setProduct(json.data)
         
            
          
        })
        .catch((err)=>{console.log(`err ${err}`)})
     
     
     }, [])

    return (
        <div>
        { product.name}
            {product.price}
        {product.description}
        {product.category}
       { product.quantity}
       { product.bestSeller}
       { product.picurl}
    
        </div>
    )
}

export default Description
