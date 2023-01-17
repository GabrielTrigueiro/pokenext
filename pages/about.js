import Image from "next/image"
import styles from "../styles/About.module.css"

export default function About() {
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Proident dolore dolor dolore anim commodo laborum. Exercitation elit eiusmod incididunt eiusmod labore nisi tempor ex eu amet officia. Minim voluptate eiusmod eu amet ad esse. Deserunt nisi dolor aliqua velit reprehenderit sint deserunt in tempor velit nisi magna adipisicing. Quis anim velit esse ad nisi eiusmod in adipisicing ex. Sint commodo minim incididunt id enim. Quis fugiat duis id consectetur.</p>
            <Image src={"/images/charizard.png"} alt={"charizard"} width={300} height={300}/>
        </div>
    )
}