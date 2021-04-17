import { Provider } from "react-redux";
import { store } from "../state";
import ProductsList from "./ProductsList";
import ProductDetails from "./ProductDetails";
import Data from "./Data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  
  return (
    <Provider store={store}>
    
      <Router>
        <div>
          <Data/>
          <Switch>
            <Route path="/" exact component={ProductsList} />
            <Route path="/product" exact component={ProductsList} />
            <Route path="/product/:id" component={ProductDetails} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
