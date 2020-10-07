import React from 'react';
import './style/App.css';

import { Router, Route, Switch } from "react-router-dom"
import history from "./history"

import Heading from "./Heading"
import AddItem from "./AddItem"



function App() {
  return (
    <div className="App">

      <Router history={history}>
        {/* <Switch>
          <Route exact path="/">
            <Heading />
            <AddItem />
          </Route>
        </Switch> */}
      </Router>

      {/* Heading */}



      {/* Input Field & content*/}


      <Router history={history}>
        <Switch>


          <Route exact path="/">
            <Heading />
            <AddItem />
          </Route>

          <Route path="/about">
            <h1>About</h1>
          </Route>


          <Route path="*">
            <h1>Not Found</h1>
          </Route>

        </Switch>
      </Router>



    </div>
  );
}

export default App;
