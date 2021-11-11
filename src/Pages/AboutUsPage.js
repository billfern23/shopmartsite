import {Container} from "react-bootstrap"
import {Link} from "react-router-dom"
const CompanyInfoPage = () => {
    return (
        <Container>
     <br />
     <br />
     <br />
            <h1> About us</h1> <br />
            <p> 
                <b> 
                    We at ShopMart take pride in servering GTA for over 40 years with the lowest prices.
                    We started our Journey in 1960 with a small convinient Store on Yonge and Sheppard. <br /> <br /> 
                    We belive that our customer always come first and  we have launched our first online store for you to enjoy.
                    We love your support over the years and have launched this website to add more safety during covid. 
                    Hopefully we all make it through covid.

                </b>
            
            </p>
      
            <ul>
                <li>
                    
                    <Link to={{ pathname: "/covidpolicy" }} style={{color:"red", textDecoration:"none"}}> 
                     Covid Returns and Exchange information
                    </Link> <br />
                </li>
            </ul>
        </Container>
      
    )
}

export default CompanyInfoPage
