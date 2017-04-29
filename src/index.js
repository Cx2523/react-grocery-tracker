import css from './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Header from './Header.js';
import Lists from './react-components/Lists.js';
import AboutPage from './AboutPage.js';
import HistoryPage from './HistoryPage.js';


ReactDOM.render(
  <BrowserRouter>
    <main>
      <Header />
      <Switch>
        <Route exact path='/' component={Lists}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/history' component={HistoryPage}/>
      </Switch>
    </main>
  </BrowserRouter>
  , mountNode);
