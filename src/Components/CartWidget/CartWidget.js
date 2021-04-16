import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './CartWidget.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
}));


export default function SvgIconsColor() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ShoppingCartIcon className= "centrar"  />
    </div>
  );
}