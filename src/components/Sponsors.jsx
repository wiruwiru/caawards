import { AnimatedSeparator } from "@/components/ui/separator"
import Image from 'next/image'
import Link from 'next/link'

export function Sponsors() {
  return (
    <div className="w-full -mt-18 mb-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-white mb-2">Patrocinadores</h2>
        <div className="w-48 mx-auto mb-4">
          <AnimatedSeparator />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <div className="relative group">
          <Link href="https://kick.com" target="_blank" rel="nofollow"><Image src="/assets/images/sponsors/kick.svg" alt="Kick" width={120} height={48} className="h-12 w-auto transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-80" /></Link>
          </div>
          <div className="relative group">
          <Link href="https://www.mcdonalds.com.ar" target="_blank" rel="nofollow"><Image src="/assets/images/sponsors/mcdonals.svg" alt="McDonald's" width={120} height={48} className="h-12 w-auto transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-80" /></Link>
          </div>
          <div className="relative group">
          <Link href="https://www.spotify.com/premium/" target="_blank" rel="nofollow"><Image src="/assets/images/sponsors/spotify.svg" alt="Spotify" width={120} height={48} className="h-12 w-auto transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-80" /></Link>
          </div>
          <div className="relative group">
          <Link href="https://kingofthekongo.com.ar" target="_blank" rel="nofollow"><Image src="/assets/images/sponsors/kongo.webp" alt="KingOfTheKongo" width={120} height={48} className="h-12 w-auto transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-80" /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}