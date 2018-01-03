import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Base from '../base'
import Site from '../site'
import ModuleComp from '../base'

const Module = () => (
  <Switch>
    <Route exact path='/admin' component={ModuleComp} />
    <Route path='/admin/:moduleKey' component={ModuleComp} />
  </Switch>
)

export default props => (
  <main style={{ height: '100%' }}>
    <Switch>
      <Route exact path="/" component={Site} />
      <Route path="/admin" component={Module} />
    </Switch>
  </main>
)