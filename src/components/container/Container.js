import React from 'react';
import Navbar from '../layout/Header/Navbar';
import Products from '../products/Products';
import NewProduct from '../products/NewProduct';
import EditProduct from '../products/EditProduct';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useStyles from './style';

const Container = () => {
    const classes = useStyles();
    return ( 
        <Router>
            <Navbar/>
                <div className ={classes.container}>
                    <Switch>
                    <Route exact path = "/" component = { Products }/> 
                    <Route exact path="/productos/nuevo" component={NewProduct}/> 
                    <Route exact path="/productos/:id" component={EditProduct}/> 
                    </Switch> 
                </div> 
        </Router>
     );
}
 
export default Container;