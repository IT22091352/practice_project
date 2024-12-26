import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import BusDetails from "./Components/BusDetails/busdetails";
import AddBus from "./Components/AddBus/AddBus";

function App() {
  return (
    <div>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mainhome" component={Home} />
          <Route path="/addBus" component={AddBus} />
          <Route path="/busdetails" component={BusDetails} />
        </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;