import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './components/login.component';

function App() {

  return (<Router>
      <div className="App">
        <div className="outer">
          <div className="inner">
            <Switch>
              <Route exact path="/" component={Login}/>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
