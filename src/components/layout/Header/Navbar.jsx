import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar , Toolbar, Typography, Button } from '@material-ui/core';
import useStyles from './style';
import AddIcon from '@material-ui/icons/Add';

const Navbar = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
        <AppBar position="static"  color="default">
          <Toolbar>
            
            <Link to={"/"} className={classes.title}>
              <Typography variant="h6" className={classes.title}>
                Crud
              </Typography>
            </Link>
            
            <Link to={"/productos/nuevo"} className={classes.btn}>
              <Button
                  variant="contained"
                  color="primary"
                  className={
                    classes.button
                    }
                  endIcon={ <AddIcon/>}
               > Agregar Producto</Button>
            </Link>
            
          </Toolbar>
        </AppBar>
      </div> 
    );
}
 
export default Navbar;