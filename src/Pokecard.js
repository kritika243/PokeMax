import React, { Component } from 'react'
import './Pokecard.css'

const Poke_Api = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

class Pokecard extends Component {
  render() {
    let imgSrc = `${Poke_Api}${this.props.id}.png`
    return (
      <div className='Pokecard'>
        <h1>{this.props.name}</h1>
        <img src={imgSrc} alt={this.props.name} />
        <div>Type: {this.props.type}</div>
        <div>Exp: {this.props.exp}</div>
      </div>
    )
  }
}

export default Pokecard
