import Hero from '@/components/Hero'
import Mission from '@/components/mission'
import { Navbar } from '@/components/Navbar'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mission />
    </div>
  )
}
