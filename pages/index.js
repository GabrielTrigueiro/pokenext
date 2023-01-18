import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from './components/Card'

export async function getStaticProps() {

  const maxPokemons = 251

  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)

  const data = await res.json()

  //adicionar id do pokemon
  data.results.forEach((element, index) => {
    element.id = index + 1
  });

  // console.log(data)

  return{
    props: {
      pokemons: data.results
    }
  }

}

export default function Home({pokemons}) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src={'/images/pokeball.png'} alt='pokebola' width={50} height={50}/>
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
    </>
  )
}