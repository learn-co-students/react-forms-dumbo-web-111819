import React from 'react';

class Form extends React.Component {

  render() {
    return (
      <div>
      <form>
        <input type="text" name="firstName" 
        // running the function that was passed down, and sending the input back up
        onChange={event => this.props.handleNameChange(event)} value={this.props.formData.firstName} />
        <input type="text" name="lastName"  onChange={event => this.props.handleNameChange(event)} value={this.props.formData.lastName} />
      </form>
       </div>
    )
  }
}

export default Form;