import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const API = "http://localhost:3000/pokemon";
class PokemonPage extends React.Component {

  state= {
    pokemon: []
  }
  
  
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState(
          {
            pokemon: data
          },

          () => {
            console.log(this.state);
          }
        );
      });
  }
 
  filterPokemon = () => {
    console.log("wors")
  }
 
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={this.filterPokemon()} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} />
      </Container>
  
      
    )
  }
}

export default PokemonPage
