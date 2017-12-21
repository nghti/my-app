import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Admin from './Admin'
import AddCart from './AddCart'
import HomeDetail from './HomeDetail'
import EditCart from './EditCart'

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/add-Cart" component={AddCart} />
        <Route exact path="/edit-cart/:id" component={EditCart} />
        <Route exact path="/detail/:id" component={HomeDetail} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
