import Head from "next/head"
import styles from "../../styles/Layout.module.css"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({children}) {
    return(
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico"/>
                <title>PokeNext</title>
            </Head>

            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}