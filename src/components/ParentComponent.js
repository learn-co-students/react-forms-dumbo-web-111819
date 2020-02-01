import React from 'react'
import Form from './Form'
import DisplayData from './DisplayData'

class ParentComponent extends React.Component{

  state = {
    firstName: "",
    lastName : ""
  }

  // handleFirstNameChange = evt => {
  //   this.setState({
  //     firstName: evt.target.value
  //   })
  // }

  // handleLastNameChange = evt => {
  //   this.setState({
  //     lastName: evt.target.value
  //   })
  // }

  handleChange = evt => {
    this.setSatate({
      [evt.target.name]: evt.target.value
    })
  }

  render(){
    return(
      <div>
        <Form
          formData={this.state}
          // handleFirstNameChange={this.handleFirstNameChange}
          // handleLastNameChange={this.handleLastNameChange}
          handleChange={this.handleChange}
        />
        <DisplayData formData={this.state} />
      </div>
    )
  }

}

export default ParentComponent