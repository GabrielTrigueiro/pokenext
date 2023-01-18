import Image from "next/image"
import styles from "../../styles/Card.module.css"
import Link from "next/link"

export default function Card({pokemon}) {
  return (
    <div className={styles.card}>
        <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={`${pokemon.name}`}
            width={120}
            height={120}
        />
        <p className={styles.id}>#{pokemon.id}</p>
        <h3 className={styles.title}>{pokemon.name}</h3>
        <button className={styles.btn}>
          <Link href={`/pokemon/${pokemon.id}`}><p>Detalhes</p></Link>
        </button>
    </div>
  )
}
