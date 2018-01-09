import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveTodo, delTodo } from '../actions';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  tableIMG: {
    width: 35,
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  DelClick(indexItem, index) {
    const conf = window.confirm('BAN CO MUON XOA KHONG ?');
    if (conf) {
      axios
        .delete(`https://599e7957d3276800116b9ceb.mockapi.io/items/${indexItem}`)
        .then(() => {
          this.props.delTodo(index);
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  componentDidMount() {
    axios
      .get(`https://599e7957d3276800116b9ceb.mockapi.io/items`)
      .then(response => {
        this.setState({
          data: response.data
        })
        this.props.saveTodo(this.state.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const items = this.props.items;
    const { classes } = this.props;
    return (
      <div className="Admin">
        <ul>
          <li>
            <Link to="/add-Cart">ADD</Link>
          </li>
        </ul>
        <h1>Admin</h1>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell numeric>CreatedAt</TableCell>
                <TableCell numeric>Name</TableCell>
                <TableCell numeric>ImageUrl</TableCell>
                <TableCell numeric>Email</TableCell>
                <TableCell numeric>Edit</TableCell>
                <TableCell numeric>X</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, i) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell numeric>{item.createdAt}</TableCell>
                    <TableCell numeric>{item.name}</TableCell>
                    <TableCell numeric><img className={classes.tableIMG} src={item.imageUrl} alt=""/></TableCell>
                    <TableCell numeric>{item.email}</TableCell>
                    <TableCell numeric><Link to={'/edit-cart/'+item.id }>Edit</Link></TableCell>
                    <TableCell numeric><button onClick={this.DelClick.bind(this, item.id, i)}>X</button></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        {/* <table className="Admin_table">
          <tbody>
          <tr>
            <th>ID</th>
            <th>CreatedAt</th>
            <th>Name</th>
            <th>ImageUrl</th>
            <th>Email</th>
            <th>Edit</th>
            <th>X</th>
          </tr>
          {
            items.map((item, i) =>
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.createdAt}</td>
                <td>{item.name}</td>
                <td><img src={item.imageUrl} alt=""/></td>
                <td>{item.email}</td>
                <td>
                <Link to={'/edit-cart/'+item.id }>Edit</Link>
                </td>
                <td><button onClick={this.DelClick.bind(this, item.id, i)}>X</button></td>
              </tr>
            )
          }
          </tbody>
        </table> */}
      </div>
    )
  }
}

Admin.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProp = state => {
  return {
    items: state.listItems.items
  }
}

const mapDispatchToProps = {
  saveTodo,
  delTodo
}

export default compose(
  withStyles(styles),
  connect(mapStateToProp, mapDispatchToProps),
)(Admin)
