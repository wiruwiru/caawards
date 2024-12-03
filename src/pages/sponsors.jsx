'use client'

import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { AnimatedSeparator } from "@/components/ui/separator"
import Image from 'next/image'
import Link from 'next/link'

export default function Patrocinadores() {
  const sponsors = [
    { href: "https://kick.com", src: "/assets/images/sponsors/kick.svg", alt: "Kick", featured: true },
    { href: "https://www.mcdonalds.com.ar", src: "/assets/images/sponsors/mcdonals.svg", alt: "McDonald's" },
    { href: "https://www.spotify.com/premium/", src: "/assets/images/sponsors/spotify.svg", alt: "Spotify" },
    { href: "https://kingofthekongo.com.ar", src: "/assets/images/sponsors/kongo.webp", alt: "KingOfTheKongo" },
    { href: "https://www.aorus.com/es-ar", src: "/assets/images/sponsors/aorus.png", alt: "Aorus" },
    { href: "https://www.logitechstore.com.ar/", src: "/assets/images/sponsors/logitech.svg", alt: "Logitech" },
  ];

  return (
    <>
      <Head>
        <title>Patrocinadores | CA Awards</title>
        <meta name="description" content="Patrocinadores de los Coscu Army Awards" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />

      <div className="relative min-h-screen">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <video className="w-full h-full object-cover blur-lg" src="/assets/video/background_video.webm" autoPlay loop muted playsInline disablePictureInPicture controlsList="nodownload noplaybackrate" />
        </div>
        
        <main className="relative z-10 px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-white">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Patrocinadores</h1>
              <AnimatedSeparator className="mx-auto" />
            </div>

            <div className="space-y-12">
              {sponsors.filter(s => s.featured).map((sponsor, index) => (
                <div key={index} className="flex justify-center">
                  <Link href={sponsor.href} target="_blank" rel="nofollow" className="block w-full max-w-sm lg:max-w-md" >
                    <div className="relative aspect-[2/1]">
                      <Image src={sponsor.src} alt={sponsor.alt} fill className="object-contain transition-all duration-300 hover:scale-105 hover:opacity-80" />
                    </div>
                  </Link>
                </div>
              ))}

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
                {sponsors.filter(s => !s.featured).map((sponsor, index) => (
                  <Link key={index} href={sponsor.href} target="_blank" rel="nofollow" className="block" >
                    <div className="relative aspect-[2/1]">
                      <Image src={sponsor.src} alt={sponsor.alt} fill className="object-contain transition-all duration-300 hover:scale-105 hover:opacity-80" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}