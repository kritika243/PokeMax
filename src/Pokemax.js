import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './Pokemax.css'

class Pokemax extends Component {
  render() {
    let title
    let winner = this.props.isWinner
    if (this.props.isWinner) {
      title = <h1 className='Pokemax-winner'>Winner :)</h1>
    } else {
      title = <h1 className='Pokemax-loser'>Loser :(</h1>
    }
    return (
      <div className='Pokemax'>
        {title}
        <h4>
          Total experience:{' '}
          <span className={winner ? 'Pokemax-winner' : 'Pokemax-loser'}>
            {this.props.exp}
          </span>
        </h4>

        <div className='Pokemax-cards'>
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Pokemax
