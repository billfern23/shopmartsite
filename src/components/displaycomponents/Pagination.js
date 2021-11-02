import PaginationItem from "./PaginationItem"
import { Pagination, Row, Col, Button, Form   } from 'react-bootstrap';
const PaginationCard = (props) => {
    const TotalPages = Math.ceil(props.products.length/ props.productsperPage)
    const totalPagesArray= []
    for(let  i = 0 ; i < TotalPages ; i ++){
        totalPagesArray.push(i+1)
    }
    

    return (
        <Pagination>
             <Pagination.First onClick={()=>{props.changePage(totalPagesArray[0])}}/>
        <Pagination.Prev onClick={()=>{props.changePage(
            
            props.currentpage-1 === 0 ? props.currentpage :props.currentpage-1  )
            
            
            }}/>
            {

            totalPagesArray.map((totalpage)=>(

                < PaginationItem totalpage={totalpage} key={totalpage} changePage={props.changePage}/>
            ))
            }
     
     <Pagination.Next 
     onClick={()=>{props.changePage(
            
        props.currentpage+1 > totalPagesArray.length ? props.currentpage :props.currentpage+1  )
        
        
        }}
     />
    <Pagination.Last onClick={()=>{props.changePage(totalPagesArray[totalPagesArray.length-1])}}/>
            
     </Pagination>
    )
}

export default PaginationCard