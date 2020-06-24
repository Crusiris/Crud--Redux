import React from 'react';
import Navbar from '../layout/Header/Navbar';
import Products from '../products/Products';
import NewProduct from '../products/NewProduct';
import EditProduct from '../products/EditProduct';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useStyles from './style';

//REDUX
import { Provider } from 'react-redux';
import store from '../../store';

const Container = () => {
    const classes = useStyles();
    return ( 
        <Router>
            <Provider store={store}>
                <Navbar/>
                    <div className ={classes.container}>
                        <Switch>
                            <Route exact path = "/" component = { Products }/> 
                            <Route exact path="/productos/nuevo" component={NewProduct}/> 
                            <Route exact path="/productos/editar/:id" component={EditProduct}/> 
                        </Switch> 
                    </div> 
            </Provider>
        </Router>
     );
}
 
export default Container;