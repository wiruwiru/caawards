import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { AnimatedSeparator } from "@/components/ui/separator"

export default function Index() {
  return (
    <>
      <Head>
        <title>Picantes | CA Awards</title>
        <meta name="description" content="Ganadores de los Coscu Army Awards" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />

      <div className="relative min-h-screen">
        <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <video className="w-full h-full object-cover filter blur-lg" src="/assets/video/background_video.webm" autoPlay loop muted playsInline disablePictureInPicture controlsList="nodownload noplaybackrate" controls={false} />
        </div>
        
        <main className="relative z-10 px-4 py-16 md:py-24">
          <div className="max-w-6xl mx-auto text-white">
            <div className="text-center mb-16">
              <h1 className="text-6xl font-bold mb-4">Picantes</h1>
              <AnimatedSeparator className="mx-auto" />
            </div>
            
            <div className="grid text-center grid-cols-1 md:grid-cols-2 gap-16">

            <div className="space-y-4">
                <h2 className="text-6xl font-light">2023</h2>
                <div className="space-y-2">
                  <div>
                    <h3 className="text-xl text-gray-400">Streamer del año</h3>
                    <p className="text-xl">DavoXeneize - David Quint</p>
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-400">Streamer Revelación</h3>
                    <p className="text-xl">mazzatomas - Tomás Massa</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-6xl font-light">2022</h2>
                <div className="space-y-2">
                  <div>
                    <h3 className="text-xl text-gray-400">Streamer del año</h3>
                    <p className="text-xl">Spreen - Ivan Buhajeruk</p>
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-400">Streamer Revelación</h3>
                    <p className="text-xl">DavoXeneize - David Quint</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-6xl font-light">2021</h2>
                <div className="space-y-2">
                  <div>
                    <h3 className="text-xl text-gray-400">Streamer del año</h3>
                    <p className="text-xl">Momo - Gerónimo Benavides</p>
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-400">Streamer Revelación</h3>
                    <p className="text-xl">Spreen - Ivan Buhajeruk</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-6xl font-light">2020</h2>
                <div className="space-y-2">
                  <div>
                    <h3 className="text-xl text-gray-400">Streamer del año</h3>
                    <p className="text-xl">Pimpeano - Galo Blasco</p>
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-400">Streamer Revelación</h3>
                    <p className="text-xl">Brunenger - Bruno Kruszyn</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-6xl font-light">2019</h2>
                <div className="space-y-2">
                  <div>
                    <h3 className="text-xl text-gray-400">Streamer del año</h3>
                    <p className="text-xl">Grafo - Nicolás Graffigna</p>
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-400">Streamer Revelación</h3>
                    <p className="text-xl">Nano - Mariano Nicolas</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-6xl font-light">2018</h2>
                <div className="space-y-2">
                  <div>
                    <h3 className="text-xl text-gray-400">Streamer del año</h3>
                    <p className="text-xl">Frankkaster - Francisco Postiglione</p>
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-400">Streamer Revelación</h3>
                    <p className="text-xl">Zeko - Federico Cristalino</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}