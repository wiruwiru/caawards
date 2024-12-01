import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../components/Home"

export default function Index() {
  return (
    <>
      <Head>
        <title>Coscu Army Awards</title>
        <meta name="description" content="Premios a la comunidad de streamers de Argentina" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <Home />
      <Footer />
    </>
  )
}