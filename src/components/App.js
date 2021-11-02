

import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from '../Pages/Hompage'
import Registerpage from '../Pages/Registerpage'
import Header from './Headers'
import ProductsPage from '../Pages/Productspage'
import DescriptionPage from '../Pages/DescriptionPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom"
function App() {
 

 
  return (
    <Router>
      <Switch>
          <Route exact path="/">
              <Header />
              <Homepage />
          </Route>
          <Route exact path="/register">
                <Header />
            <Registerpage />
        </Route>
        <Route  path="/products" >
                <Header />
                
            <ProductsPage />
        </Route>
        <Route  path="/product/:id" exact>
                <Header />
                < DescriptionPage />
          
        </Route>
       

         
    

      </Switch>
    </Router>
   
 
  );
}

export default App;
