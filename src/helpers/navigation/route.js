import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SingleScreen from '../../screens/SingleScreen';
import MainScreen from '../../screens/MainScreen';

export default (
    <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route exact path="/:single" component={SingleScreen} />
    </Switch>
);