import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Dash from './Dashboard';
import Menu from './Menu';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Menu}></Route>
                <Route path="/dash" component={Dash}></Route>
            </Switch>
        </BrowserRouter>
        
    )
}