import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Button from 'material-ui/Button';

import Home from './Home';
import Header from './Header';
import Admin from './Admin';
import AddCart from './AddCart';
import HomeDetail from './HomeDetail';
import EditCart from './EditCart';

// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit,
//   },
// });

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      {/* <Button className="btn-admin" raised color="accent">
        <Link to={'/admin'}>Admin</Link>
      </Button> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/add-Cart" component={AddCart} />
        <Route exact path="/edit-cart/:id" component={EditCart} />
        <Route exact path="/detail/:id" component={HomeDetail} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
