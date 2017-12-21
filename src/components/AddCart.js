import React from 'react'
import axios from 'axios'

class AddCart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      createdAt: 1509940755,
      name: "hoang tu",
      imageUrl: "https://unsplash.it/50?image=46",
      email: "hoangtu@mail.com"
    }

    this.AddChange = this.AddChange.bind(this);
    this.AddClick = this.AddClick.bind(this);
  }

  AddChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  AddClick(e) {
    e.preventDefault()
    axios
      .post(`https://599e7957d3276800116b9ceb.mockapi.io/items`, {
        createdAt: this.state.createdAt,
        name: this.state.name,
        imageUrl: this.state.imageUrl,
        email: this.state.email
      })
      .then(() => {
        alert('ADD DONE')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { id, createdAt, name, imageUrl, email } = this.state;
    return (
      <div className="AddTodo">
        <br/><br/>
        <form onSubmit={this.AddClick}>
          <label>CreatedAt</label>
          <input type="text" value={createdAt} name="createdAt" onChange={this.AddChange}/>
          <br/><br/>
          <label>Name</label>
          <input type="text" value={name} name="name" onChange={this.AddChange}/>
          <br/><br/>
          <label>ImageURL</label>
          <input type="text" value={imageUrl} name="imageUrl" onChange={this.AddChange}/>
          <br/><br/>
          <label>Email</label>
          <input type="text" value={email} name="email" onChange={this.AddChange}/>
          <br/><br/>
          <button>ADD</button>
        </form>
      </div>
    )
  }
}

export default AddCart;
