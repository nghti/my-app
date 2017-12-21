import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveTodo, delTodo } from '../actions';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  DelClick(indexItem, index) {
    const conf = confirm('BAN CO MUON XOA KHONG ?');
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
    return (
      <div className="Admin">
        <ul>
          <li>
            <Link to="/add-Cart">ADD</Link>
          </li>
        </ul>
        <h1>Admin</h1>
        <table className="Admin_table">
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
        </table>
      </div>
    )
  }
}

const mapStateToProp = state => {
  return {
    items: state.listItems.items
  }
}

const mapDispatchToProps = {
  saveTodo,
  delTodo
}

export default connect(mapStateToProp, mapDispatchToProps)(Admin)
