import React from 'react'
import Head from "next/head"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { AnimatedSeparator } from "../../components/ui/separator"
import Laureles from "../../components/ui/laureles"

const categories = [
  "Streamer del año",
  "Streamer revelación",
  "Streamer promesa",
  "Streamer alternativo",
  "Clip del año",
  "Streamer aparición",
  "Dupla del año",
  "Youtuber del año",
  "Streamer destacado",
  "Artista grafico",
  "Streamer variedad",
  "Rockstar del año",
  "Creador de contenido de la comunidad",
  "Streamer IRL",
  "Voz del año",
  "Mejor Roleplayer",
  "Clip más divertido",
  "Susto del año",
  "Piquin del año",
  "Streamer mejor producción",
  "Streamer más comprometido",
  "Tilteo del año",
  "Mayor trayectoria",
  "Streamer Fornite",
  "Troleada del año",
  "Freestyle del año",
  "Streamer CS:GO",
  "Timming del año",
  "Streamer de Lol",
  "Fail del año",
]

const TernasPage = () => {
  const year = 2021;

  return (
    <>
      <Head>
        <title>Ternas {year} | CA Awards</title>
        <meta name="description" content={`Ternas ${year} de los Coscu Army Awards`} />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />

      <div className="relative min-h-screen">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <video className="w-full h-full object-cover filter blur-lg" src="/assets/video/background_video.webm" autoPlay loop muted playsInline />
        </div>
        
        <main className="relative z-10 px-4 py-16 md:py-24">
          <div className="max-w-7xl mx-auto text-white">
            <div className="text-center mb-8 sm:mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Ternas {year}</h1>
              <AnimatedSeparator className="mx-auto" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 justify-items-center">
              {categories.map((category, index) => (
                <Laureles key={category} title={category} year={year} isGold={index === 0 || index === 1 || index === 2} className="w-full max-w-[200px]" />
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default TernasPage