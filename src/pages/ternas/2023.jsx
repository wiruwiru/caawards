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
  "Evento Destacado",
  "Programa de Stream",
  "Evento recurrente",
  "Streamer IRL",
  "Streamer Productor",
  "Streamer Alternativo",
  "Streamer Musical",
  "Streamer de Exteriores",
  "Streamer Deportivo",
  "Streamer Variedad",
  "Grupo en Stream",
  "Streamer de Slots",
  "Streamer de Roleplay",
  "Streamer de Valorant",
  "Streamer de Counter Strike",
  "Streamer de Lol",
  "Clip del año",
  "Streamer más comprometido",
  "Timming del año",
  "Fail del año",
  "Tilteo del año",
  "Susto del año"
]

const TernasPage = () => {
  const year = 2023;

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
          <video 
            className="w-full h-full object-cover filter blur-lg" 
            src="/assets/video/background_video.webm" 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
        </div>
        
        <main className="relative z-10 px-4 py-16 md:py-24">
          <div className="max-w-7xl mx-auto text-white">
            <div className="text-center mb-16">
              <h1 className="text-6xl font-bold mb-4">Ternas</h1>
              <AnimatedSeparator className="mx-auto" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
              {categories.map((category, index) => (
                <Laureles key={category} title={category} year={year} isGold={index === 0 || index === 1 || index === 2} />
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