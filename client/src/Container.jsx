import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    margin: 'auto',
    maxWidth: '40%',
  },
};

function Container (props){
  const { classes, children } = props;
  
  return(
    <div className={classes.root}>
    {children}
    </div>
  )
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default withStyles(styles)(Container);