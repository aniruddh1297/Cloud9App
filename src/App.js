import "./App.css";

import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import About from "./components/About/about";
import ProductDetails from "./components/ProductDetails/ProductDetails";

import { Route, Switch, NavLink } from "react-router-dom";
import Software from "./components/Software/Software";
import Button from "./components/Button/Button";
import { useState } from "react";
import Accessories from "./components/Accessories/Accessories";
import Forum from "./components/Forum/Forum";

function App() {

  let [loggedIn,setLogin]= useState(false); 
  let [isLoading,setLoading]=useState(false);


  const handleLogin =()=>{

    setLoading(true);

    setTimeout(()=>{
      setLogin(!loggedIn);
      setLoading(false);
    },2000)
  
  
  };


  return (
    <div className="App">
      <nav>
        <div className="logo"></div>
        <h1>SHUTTERNITROS</h1>
        <NavLink to="/" exact className="home">
          Home
        </NavLink>
        <NavLink to="/about" className="aboutus">About Us</NavLink>
        <NavLink to="/products" className="hotcams">Camera</NavLink>
        <NavLink to="/accessories" className="accessories">Accessories</NavLink>
        <NavLink to="/software" className="software">Softwares</NavLink>
        <NavLink to="/forum" className="forum">Forum</NavLink>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/about" component={About} />

        <Route path="/products/:id/:name">
          <ProductDetails />
        </Route>
        <Route  path="/forum"> 
          <Forum/>
        </Route>
        <Route path="/accessories">
          <Accessories/>
        </Route>
        <Route path="/products" >
          <Products isUserLoggedin={loggedIn} isLoading={isLoading}/>
        </Route>
        <Route path="/software" component={Software} />
      </Switch>
    </div>
  );
}

export default App;
