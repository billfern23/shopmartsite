

const BestSellerCard = (props) => {
    return (
        <div className="onout" style={{textAlign:"center"}} >
              <img src={props.img} alt="" style={{width:'100%', height:'170px', paddingTop:"20px", objectFit:'contain'}}/>
              <p style={{fontSize:'14px', padding: '2px 0'}}>
                       Trending Item{props.category}
                    </p>
                    <p style={{fontSize:'14px', padding:'0px 0'}}>
                            {props.title}
                    </p>
                    <p style={{fontSize:'14px', padding: '0px 0', color: 'gray'}}>
                        Price: ${props.price}
                    </p>
        </div>
    )
}

export default BestSellerCard
