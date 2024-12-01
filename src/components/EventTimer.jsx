'use client'

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Timer } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function EventTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isLive, setIsLive] = useState(false)

  const targetDate = new Date('2024-12-31T23:59:59-03:00')

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsLive(true)
        return
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="w-fit mx-auto bg-black/40 backdrop-blur-sm border-none shadow-lg">
      <CardContent className="flex flex-col items-center gap-4 p-4">
        <div className="text-white text-lg font-semibold">
          {isLive ? "Comenzó el evento" : "Comenzamos en"}
        </div>
        {isLive && (
          <Link href="https://kick.com/brunenger" className="flex items-center gap-4">
            <Image
              src="/assets/images/brunenger.webp"
              alt="Brunenger"
              width={40}
              height={40}
              className="rounded-full"/>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/sponsors/kick.svg"
                alt="Kick-Logo"
                width={60}
                height={30}/>
              <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
            </div>
          </Link>
        )}
        <div className="flex items-center gap-6">
          {!isLive && (
            <>
              <Timer className="w-5 h-5 text-[#53FC18]" />
              <div className="flex gap-4 text-white">
                <TimeUnit value={timeLeft.days} label="DÍAS" />
                <TimeUnit value={timeLeft.hours} label="HS" />
                <TimeUnit value={timeLeft.minutes} label="MIN" />
                <TimeUnit value={timeLeft.seconds} label="SEG" />
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function TimeUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-xl font-mono tabular-nums font-bold">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-xs text-gray-400">{label}</span>
    </div>
  )
}