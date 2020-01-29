import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'
class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }
 
  handleNameChange = event => {
    this.setState({
   [event.target.name]: event.target.value 
    }) 
}
 
  render() {
    return (
        <div>
      <Form
    //   passing functions into child component
       formData={this.state}
       handleNameChange={this.handleNameChange}
      />
       {/* passing data into display component to show on page */}
      <DisplayData formData={this.state}/>
      </div>
    )
  }
}
 
export default ParentComponent;