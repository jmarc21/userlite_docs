import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home.js';
import Components from './components/components/components.js';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/components' component={Components} />
    </Switch>
)
