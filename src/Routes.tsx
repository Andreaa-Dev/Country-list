import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Country from './pages/country/Country'
import CountryFavorite from './pages/country/CountryFavorite'
import CountryTable from './pages/country/CountryTable'
import LandingPage from './pages/landingPage/LandingPage'
import NavBar from './pages/navbar/NavBar'

const Routes = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/country" component={CountryTable} />
      <Route exact path="/favorite" component={CountryFavorite} />

      <Route exact path="/country/:name" component={Country} />
    </Switch>
  </div>
)

export default Routes
