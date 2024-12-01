import { AnimatedSeparator } from "@/components/ui/separator"

export function Sponsors() {
  return (
    <div className="w-full -mt-18 mb-16">
      <div className="container mx-auto">
        <h2 className="text-2xl text-center text-white mb-2">Patrocinadores</h2>
        <div className="w-48 mx-auto">
          <AnimatedSeparator />
        </div>
        <div className="flex justify-center items-center gap-12 px-4 mt-6">
          <img src="/assets/images/sponsors/kick.svg" alt="Kick" className="h-12 w-auto" />
          <img src="/assets/images/sponsors/mcdonals.svg" alt="McDonald's" className="h-12 w-auto" />
          <img src="/assets/images/sponsors/spotify.svg" alt="Spotify" className="h-12 w-auto" />
        </div>
      </div>
    </div>
  )
}