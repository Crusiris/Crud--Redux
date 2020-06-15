import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const Navbar = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
        <AppBar position="static"  color="default">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Crud
            </Typography>

            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={ <AddIcon/>}
            >Agregar proyecto</Button>
    
            
          </Toolbar>
        </AppBar>
      </div> 
    );
}
 
export default Navbar;