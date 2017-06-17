import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './layouts/main-layout';
import Header from './layouts/header';

// Sidebars
import SidebarsSetup from './layouts/sidebar-setup';

// Pages
import DrowingArea from './contents/drowing-area';
import preview from './contents/preview';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="templates">
                <IndexRoute components={{content: DrowingArea, sidebarSetup: SidebarsSetup, header: Header}} />
                <Route path="setup/" components={{content: DrowingArea, sidebarSetup: SidebarsSetup, header: Header}} />
                <Route path="setup/:id" components={{content: DrowingArea, sidebarSetup: SidebarsSetup, header: Header}} />

                <Route path="preview/:id" components={{content: preview, sidebarSetup: SidebarsSetup, header: Header}} />
            </Route>
        </Route>
    </Router>
), document.getElementById('page-container'));
