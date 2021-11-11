import { Pagination } from 'react-bootstrap';

const PaginationItem = (props) => {
   
    return (
    
  
        <Pagination.Item 
        onClick={()=>{props.changePage(props.totalpage)}}>{props.totalpage}</Pagination.Item>

    )
}

export default PaginationItem
