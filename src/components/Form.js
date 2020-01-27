import React from 'react';
import Name from './Name'

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    newName: []
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({newName: [...this.state.newName, <Name firstName ={this.state.firstName} lastName = {this.state.lastName} />]})
  }

  render() {
    return (
      <div>
        <form onSubmit = {(e)=> this.handleSubmit(e)} >
          <input type="text" name="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
          <input type = 'submit'/>
        </form>
        {this.state.newName}
      </div>
      
    )
  }
}

export default Form;