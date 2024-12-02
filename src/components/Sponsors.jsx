import { AnimatedSeparator } from "@/components/ui/separator"
import Image from 'next/image'

export function Sponsors() {
  return (
    <div className="w-full -mt-18 mb-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-white mb-2">Patrocinadores</h2>
        <div className="w-48 mx-auto mb-4">
          <AnimatedSeparator />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <Image src="/assets/images/sponsors/kick.svg" alt="Kick" width={120} height={48} className="h-12 w-auto" />
          <Image src="/assets/images/sponsors/mcdonals.svg" alt="McDonald's" width={120} height={48} className="h-12 w-auto" />
          <Image src="/assets/images/sponsors/spotify.svg" alt="Spotify" width={120} height={48} className="h-12 w-auto" />
        </div>
      </div>
    </div>
  )
}