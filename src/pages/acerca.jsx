import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { AnimatedSeparator } from "@/components/ui/separator"

export default function Index() {
  return (
    <>
      <Head>
        <title>Información | CA Awards</title>
        <meta name="description" content="Acerca de CA Awards" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />

      <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <video className="w-full h-full object-cover filter blur-lg" src="/assets/video/background_video.webm" autoPlay loop muted playsInline />
        </div>
        
        <main className="relative z-10 px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-white">
            <div className="text-center mb-8">
              <h1 className="text-6xl font-bold mb-4">Información</h1>
              <AnimatedSeparator className="mx-auto" />
            </div>
            
            <div className="space-y-6 text-lg">
              <p>
                Los Coscu Army Awards es un evento que premia y homenajea a streamers de la comunidad 
                de Twitch de Argentina, por el streamer argentino Martín Pérez Disalvo.
              </p>

              <p>
                En 2018, organizó el primer evento de la Coscu Army Awards en la Escuela Da Vinci, y fue 
                transmitido por Twitch. El evento alcanzó un pico de 40 mil espectadores, superando al 
                streamer más popular de la plataforma en el mundo en esa época, Ninja. El premio al 
                streamer del año fue para Francisco "Frankkaster" Postiglione.
              </p>

              <p>
                En 2019, se realizó la segunda edición en el Estadio Obras Sanitarias de CABA, contó con un 
                pico de casi 100 mil espectadores. En esta oportunidad el premio al streamer del año se lo 
                llevó Nicolás "Grafo" Graffigna.
              </p>

              <p>
                En 2020, se organizó la tercera edición en el Estadio Obras Sanitarias, superó los 425 mil 
                espectadores y se convirtió en la transmisión más vista de la plataforma en Latinoamérica, y 
                los streamers le otorgaron a Coscu el reconocimiento de "Streamer Leyenda". En una noche 
                llena de emociones culminó con la premiación a Galo "Pimpeano" Blasco como streamer del año.
              </p>

              <p>
                En 2021, se realizó la cuarta edición en el Hotel Hilton. En esta oportunidad el premio al 
                streamer del año se lo llevó Gerónimo "Momo" Benavides, y además homenajearon a 
                Frankkaster, Grafo y Pimpeano ganadores en años anteriores con un anillo de oro como 
                obsequio.
              </p>

              <p>
                En 2022, hubo un salto importante para la comunidad al realizar la quinta edición en el 
                monumento histórico de Argentina: el Teatro Colón, contó con más de 200 mil espectadores 
                y más de 2.500 invitados. En esta edición el premio al streamer del año se lo llevó Iván 
                "Spreen" Buhajeruk.
              </p>

              <p>
                En 2023, se realizó la sexta edición en el estadio Luna Park, En esta oportunidad el premio al 
                streamer del año se lo llevó David "DavooXeneize" Quint.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}