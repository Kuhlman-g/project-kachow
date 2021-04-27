import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import BrandsIndexContainer from "./BrandsIndexContainer"
import BrandShowContainer from "./BrandShowContainer"
import PizzaShowContainer from "./PizzaShowContainer"


const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BrandsIndexContainer}/>
        <Route exact path="/pizzas" component={BrandsIndexContainer}/>
        <Route exact path="/pizzas/:id" component={BrandShowContainer}/>
        <Route exact path="/pizza/:id" component={PizzaShowContainer}/>
      </Switch>
    </BrowserRouter>
  )}

export default App
