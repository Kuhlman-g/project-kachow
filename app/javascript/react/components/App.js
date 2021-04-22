import React from 'react'
import PizzasIndexContainer from "./PizzasIndexContainer"
import PizzaShowContainer from "./PizzaShowContainer"
import { BrowserRouter, Route, Switch } from "react-router-dom"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pizzas" component={PizzasIndexContainer}/>
        <Route exact path="/pizzas/:id" component={PizzaShowContainer}/>
      </Switch>
    </BrowserRouter>
  )}

export default App
