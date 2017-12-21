import axios from 'axios';
import React from 'react';

class EditCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: '',
        createdAt: '',
        name: "hoang tu",
        imageUrl: '',
        email: ''
      },
    };

    this.EditChange = this.EditChange.bind(this);
    this.AddClick = this.AddClick.bind(this);
  }

  EditChange(e) {
    const field = e.target.name;
    const cat = this.state.data;
    cat[field] = e.target.value;
    this.setState(cat)
  }

  AddClick(e) {
    e.preventDefault()
    axios
      .put(`https://599e7957d3276800116b9ceb.mockapi.io/items/${this.state.data.id}`, {
        id: this.state.data.id,
        createdAt: this.state.data.createdAt,
        name: this.state.data.name,
        imageUrl: this.state.data.imageUrl,
        email: this.state.data.email
      })
      .then(() => {
        alert('EDIT DONE')
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    axios
      .get(`https://599e7957d3276800116b9ceb.mockapi.io/items/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          data: response.data,
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

  render() {
    const { id, createdAt, name, imageUrl, email } = this.state.data;
    return (
      <div className="EditTodo">
        <br /><br />
        <form onSubmit={this.AddClick}>
          {/* <label>ID</label>
          <input type="text" name="id" defaultValue={id} onChange={this.EditChange} /> */}
          <br /><br />
          <label>CreatedAt</label>
          <input type="text" name="createdAt" value={createdAt} onChange={this.EditChange} />
          <br /><br />
          <label>Name</label>
          <input type="text" name="name" value={name} onChange={this.EditChange} />
          <br /><br />
          <label>ImageURL</label>
          <input type="text" name="imageUrl" value={imageUrl} onChange={this.EditChange} />
          <br /><br />
          <label>Email</label>
          <input type="text" name="email" value={email} onChange={this.EditChange} />
          <br /><br />
          <button>ADD</button>
        </form>
      </div>
    )
  }
}

export default EditCart;
