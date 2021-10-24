import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CountryTable from './pages/country/CountryTable'
import LandingPage from './pages/landingPage/LandingPage'
import NavBar from './pages/navbar/NavBar'

const Routes = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/country" component={CountryTable} />
      <Route exact path="/home" component={LandingPage} />
      {/* <Route exact path="/products/:id" component={Product} /> */}
    </Switch>
  </div>
)

export default Routes
