import React, { Component } from 'react'



export default class Creature extends Component {
    render() {
        return (
            <div className="creature">
                <img src={this.props.url} alt="pic" />
                <div>Title: {this.props.title}</div>
                <div className="description">Description: {this.props.description}</div>
                <div>Horns: {this.props.horns}</div>

            </div>
        )
    }
}
