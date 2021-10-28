
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from '../Pages/Hompage'
import Registerpage from '../Pages/Registerpage'
import Header from './Headers'
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
            
                <Homepage />

            </Route>
            <Route exact path="/Register">
            <Header />
            <Registerpage />
        
        
        </Route>


      </Switch>
    </Router>
   
 
  );
}

export default App;
