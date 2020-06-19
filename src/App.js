import React from 'react';
import Navbar from './components/layout/Header/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/Products/Products';
import NewProduct from './components/Products/NewProduct';
import EditProduct from './components/Products/EditProduct';

function App() {
    return ( 
        <Router>
            <Navbar/>
                <div className = "container" >
                    <Switch>
                    <Route exact path = "/" component = { Products }/> 
                    <Route exact path="/productos/nuevo" component={NewProduct}/> 
                    <Route exact path="/productos/:id" component={EditProduct}/> 
                    </Switch> 
                </div> 
        </Router>
    );
}

export default App;