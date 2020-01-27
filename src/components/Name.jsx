import React, { Component } from 'react'

export class Name extends Component {
    render() {
        return (
            <div>
                {this.props.firstName}{' '}{this.props.lastName}
            </div>
        )
    }
}

export default Name
