import { Image,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

//this file just returns the card by maping each category into a card like object so the carousel is just filled with cards,
//each time the array  refreshes.
const BestSellerCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345, border:"1px #CDCDCD solid" }}>
    <CardMedia
        component="img"
        height="250"
        width="100%"
        image={props.img}
        alt="green iguana"
      />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Top Trending
        </Typography>
        <Typography variant="body2" color="common">
        {props.title}
        </Typography>
        <Typography variant="body2" style={{color:"red"}}>
         From ${props.price} 
        </Typography>
        <Button variant="outline-danger">
          <Link
            to={`/product/${props.id}`}
            style={{
              color: "#EE0000",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
             More Details
          </Link>
        </Button>
      </CardContent>

      
     
    </Card>
  );
};

export default BestSellerCard;
