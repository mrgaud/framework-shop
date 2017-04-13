import React from 'react'

import {Route, Switch} from 'react-router-dom'

import Cart from './components/Cart/Cart'
import Details from './components/Details/Details'
import Shop from './components/Shop/Shop'
import Landing from './components/Landing/Landing'
import ThankYou from './components/thank-you/thank-you'

export default (
    <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/details/:name' component={Details}/>
        <Route path='/shop' exact component={Shop}/>
        <Route path='/cart' exaact component={Cart}/>
        <Route path='/thank-you' exaact component={ThankYou}/>
    </Switch>
)
