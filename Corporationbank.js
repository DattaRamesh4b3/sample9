import React, { Component } from 'react'

export default class Corporationbank extends Component {
    render() {
        return (
            <div>
                <h1>Corporationbank account for {this.props.info.lastName}</h1>
            </div>
        )
    }
}
