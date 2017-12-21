// import { connect } from 'react-redux'
// import { saveTodo } from '../action'

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    // width: 500,
    // height: 450,
  },
});

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: [],
      isLoading: true
    }
  }

  componentDidMount() {
    axios
      .get('https://599e7957d3276800116b9ceb.mockapi.io/items')
      .then(response => {
        this.setState({
          items: response.data,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false
        });
      });
  }

  render(){
    const { classes } = this.props;

    if (this.state.isLoading) {
      return (
        <div>
          <h2>LOADING...</h2>
        </div>
      )
    }

    return(
      <div>
        <div className={classes.container}>
          <GridList cellHeight={280} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <Subheader component="div">Search</Subheader>
            </GridListTile>
            {this.state.items.map(tile => (
              <GridListTile key={tile.id}>
                <img src={tile.imageUrl} alt={tile.name} />
                <GridListTileBar
                  title={tile.name}
                  subtitle={<span>by: {tile.email}</span>}
                  actionIcon={
                    <Link to={'/detail/'+tile.id}>
                    <IconButton>
                      <InfoIcon color="rgba(255, 255, 255, 0.54)" />
                    </IconButton>
                    </Link>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
        {/* <div className="Home">
          <ul className="App_menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
          <h2>Page Home</h2>
          {this.state.items.map(item =>
            <div key={item.id} className="Home_lists">
              <Link to={'/detail/'+item.id}><img src={item.imageUrl} alt=""/></Link>
              <div>
                <p>{item.name}</p>
              </div>
            </div>
          )}
        </div> */}
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

// const mapStateToProp = state => {
//   return {
//     items: state.listItems.items,
//     isLoad: state.listItems.isLoad
//   }
// }

// const mapDispatchToProps = {
//   saveTodo
// }

// export default connect(mapStateToProp, mapDispatchToProps)(Home)
