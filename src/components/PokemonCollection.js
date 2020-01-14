import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  // const {name, id, sprites} = this.props;
  
  flipCard = (id, properties) => {
   if(id.isFlipped === false) {
    console.log(id);
    
   }

    
    
  }


  render() {
    return (
      <Card.Group itemsPerRow={6}>
      {
        this.props.pokemon.map(poke => {
          return (<PokemonCard 
            key= {poke.id}
            name= {poke.name}
            image= {poke.sprites}
            id= {poke.id}
            // flipCard= {this.flipCard}
            />)
        })
      }
      </Card.Group>
    )
  }
}

export default PokemonCollection
