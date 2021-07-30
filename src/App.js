import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { isUserLoggedIn } from "./actions/auth.action";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AddProduct from "./containers/Product/AddProduct";
import ProductList from "./containers/Product/ProductList";
import Sales from "./containers/Sales-Module/Sales";
import SalesReport from "./containers/Sales-Module/Sales-Report";
import Purchase from "./containers/Purchase-Module/Purchase";
import AlarmingReport from "./containers/Alarming-Module/Alarming-Medicine";
import PurchaseReport from "./containers/Purchase-Module/Purchase-Report";

function App() {
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route path="/addMedicine" component={AddProduct} />
        <Route path="/medicineList" component={ProductList} />
        <Route path="/sales" component={Sales} />
        <Route path="/salesReport" component={SalesReport} />
        <Route path="/purchase" component={Purchase} />
        <Route path="/purchaseReport" component={PurchaseReport} />
        <Route path="/alarmingReport" component={AlarmingReport} />
      </Switch>
    </>
  );
}

export default App;
