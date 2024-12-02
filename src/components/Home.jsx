import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PicanteModelCanvas } from "@/components/three/PicanteModelCanvas";
import { EventTimer } from "./EventTimer";
import { Sponsors } from "./Sponsors";
import Link from "next/link"

export default function Home() {
  return (
    <section className="relative min-h-screen">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/images/background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.6)'
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center min-h-screen">
        <div className="flex-1 flex flex-col items-center justify-center w-full px-4 pt-20 pb-16">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            COSCU ARMY AWARDS
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-4 text-gray-200 text-center max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}>
            Premios a la comunidad de streamers de <span className="text-blue-500">Argentina</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}>
            <EventTimer />
          </motion.div>

          <div className="w-full mb-8">
            <PicanteModelCanvas />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}>
            <Button asChild variant="golden" className="text-black font-bold px-8 py-6 text-lg">
              <Link href="/acerca" rel="noopener noreferrer">Saber más</Link>
            </Button>
          </motion.div>
        </div>

        <div className="w-full -mt-12">
          <Sponsors />
        </div>
      </div>
    </section>
  );
}