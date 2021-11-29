import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "../Pages/Hompage";
import Registerpage from "../Pages/Registerpage";
import Header from "./Header/Headers";
import ProductsPage from "../Pages/Productspage";
import DescriptionPage from "../Pages/DescriptionPage";
import AboutUs from "../Pages/AboutUsPage";
import CovidPolicyPage from "../Pages/CovidPolicyPage";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer"
import CategoriesContext from "../context/CategoriesContext";
import LoadingContext from "../context/LoadingContext";
import Scroll from "../components/Scroll.js"
//Root file for all components, everything thing is interjected from this file
//put header and footer here to decrease imports in other file every page has to have them.
function App() {
  const [productcategory, setProductcategory] = useState([]);
  const [Loading, setLoading] = useState(true)

  return (
    <Router>
      <Scroll />
      <CategoriesContext.Provider
        value={{ productcategory, setProductcategory }}
       
      >
         <LoadingContext.Provider
        value={{ Loading, setLoading }}
       
      >
        <Switch>
          <Route exact path="/">
            <Header />
            <Homepage />
            <Footer />
          </Route>
          <Route exact path="/register">
            <Header />
            <Registerpage />
            <Footer />
          </Route>
          <Route path="/products">
            <Header />

            <ProductsPage />
            <Footer />
          </Route>
          <Route path="/product/:id" exact>
            <Header />
            <DescriptionPage />
            <Footer />
          </Route>
          <Route path="/aboutus" exact>
            <Header />
            <AboutUs />

            <Footer />
          </Route>
          <Route path="/covidpolicy" exact>
            <Header />
            <CovidPolicyPage />

            <Footer />
          </Route>

        </Switch>
       </LoadingContext.Provider>
      </CategoriesContext.Provider>
    </Router>
  );
}

export default App;
