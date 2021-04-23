import React from 'react'
import BrandsIndexContainer from "./BrandsIndexContainer"
import BrandShowContainer from "./BrandShowContainer"
import { BrowserRouter, Route, Switch } from "react-router-dom"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pizzas" component={BrandsIndexContainer}/>
        <Route exact path="/pizzas/:id" component={BrandShowContainer}/>
      </Switch>
    </BrowserRouter>
  )}

export default App
