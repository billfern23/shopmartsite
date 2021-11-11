import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "../Pages/Hompage";
import Registerpage from "../Pages/Registerpage";
import Header from "./Header/Headers";
import ProductsPage from "../Pages/Productspage";
import DescriptionPage from "../Pages/DescriptionPage";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CategoriesContext from "../context/CategoriesContext";

function App() {
  const [productcategory, setProductcategory] = useState([]);

  return (
    <Router>
      <CategoriesContext.Provider
        value={{ productcategory, setProductcategory }}
      >
        <Switch>
          <Route exact path="/">
            <Header />
            <Homepage />
          </Route>
          <Route exact path="/register">
            <Header />
            <Registerpage />
          </Route>
          <Route path="/products">
            <Header />

            <ProductsPage />
          </Route>
          <Route path="/product/:id" exact>
            <Header />
            <DescriptionPage />
          </Route>
        </Switch>
      </CategoriesContext.Provider>
    </Router>
  );
}

export default App;
