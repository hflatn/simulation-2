import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import login from './components/auth view/authview.js';
import dash from './components/dashboard/dashboard.js';
import step1 from './components/wizard/step1.js';
import step2 from './components/wizard/step2.js';
import step3 from './components/wizard/step3.js';
import step4 from './components/wizard/step4.js';
import step5 from './components/wizard/step5.js';

export default (
    <Switch>

        <Route component = { login } path = "/" exact />
        <Route component = { dash } path = "/dashboard" exact />
        <Route component = { step1 } path = "/dashboard/1" />
        <Route component = { step2 } path = "/dashboard/2"/>
        <Route component = { step3 } path = "/dashboard/3"/>
        <Route component = { step4 } path = "/dashboard/4"/>
        <Route component = { step5 } path = "/dashboard/5"/>
        
    </Switch>
)