
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from '../Pages/Hompage'
import Registerpage from '../Pages/Registerpage'
import Header from './Headers'
import ProductsPage from '../Pages/Productspage'

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
        <Route  path="/products" exact>
                <Header />
            <ProductsPage />
        </Route>
        <Route  exact path="/products?category=" exact> 
                <Header />
         
        </Route>

      </Switch>
    </Router>
   
 
  );
}

export default App;
