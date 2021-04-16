import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
            Global Deportes
          <IconButton  edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuList className="centrar">
                    <MenuItem className="listado">Lista 1</MenuItem>
                    <MenuItem className="listado">Lista 2</MenuItem>
                    <MenuItem className="listado">Lista 3</MenuItem>
          </MenuList>    
          </IconButton>
          </Typography>
        </Toolbar>
        <CartWidget />
      </AppBar>
    </div>
  );
}