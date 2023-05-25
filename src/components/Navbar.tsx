'use client'
import React, { useState } from 'react'
import { X, AlignJustify } from 'lucide-react'

export function Navbar() {
  const [nav, setnav] = useState(false)

  const handleNav = () => {
    setnav(!nav)
  }

  return (
    <div className="mx-auto flex h-24 max-w-[1240px] items-center justify-between px-4 font-sans text-gray-700">
      <h1 className="w-full font-alt text-3xl text-yellow-500">
        SERTÃO DE DEUS.
      </h1>
      <ul className="hidden whitespace-nowrap md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Quem Somos?</li>
        <li className="p-4">Projetos</li>
        <li className="p-4">Como ajudar?</li>
        <li className="p-4">Contato</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <X /> : <AlignJustify />}
      </div>
      <div
        className={
          !nav
            ? 'fixed left-0 top-0 h-full w-[60%] border-r bg-gray-50 shadow duration-500 ease-in-out'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className="m-4 w-full font-alt text-3xl text-yellow-500">
          SERTÃO DE DEUS.
        </h1>
        <ul className="p-4 text-base uppercase">
          <li className="p-4">Home</li>
          <li className="p-4">Quem Somos?</li>
          <li className="p-4">Projetos</li>
          <li className="p-4">Como ajudar?</li>
          <li className="p-4">Contato</li>
        </ul>
      </div>
    </div>
  )
}
