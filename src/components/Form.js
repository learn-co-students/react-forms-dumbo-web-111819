import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleFirstNameChange = event => {
    console.log(event.target.value)
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    console.log(event.target.value)
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    let dataArray = this.state.submittedData.concat(formData)
    
    this.setState({
      submittedData: dataArray
    })
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;