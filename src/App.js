import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import SearchPage from "./SearchPage";
import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
import EntirePlace from './EntirePlace';
import UniqueStays from './UniqueStays';
import Farm from './Farm';

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/farm">
            <Farm></Farm>
          </Route>
          <Route path="/uniquestays">
            <UniqueStays></UniqueStays>
          </Route>
          <Route path="/entireplace">
            <EntirePlace></EntirePlace>
          </Route>
          <Route path="/search">
            <SearchPage></SearchPage>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
