import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import styled from 'styled-components';

const Button1 = styled.button`
  background: red;
  border-radius: 8px;
  color: white;
`;

const styles = theme => ({
  root: {
    // marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  linkto: {
    color: 'white',
  },
});

class Header extends React.Component {
  render(){
    const {classes} = this.props;
    return(
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/">
              <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                <MenuIcon />
              </IconButton>
            </Link>
            <Typography type="title" color="inherit" className={classes.flex}>
              Shop Management
            </Typography>
            <Button1 color="contrast"><Link className={classes.linkto} to={'/admin'}>Admin</Link></Button1>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Header);
