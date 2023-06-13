'use client'
import React, { useState } from 'react'
import { X, AlignJustify } from 'lucide-react'
import Image from 'next/image'
import logo from '../app/icon.png'

export function Navbar() {
  const [nav, setnav] = useState(false)

  const handleNav = () => {
    setnav(!nav)
  }

  return (
    <div className="mx-auto flex h-24 max-w-[1240px] items-center justify-between px-4 font-sans text-gray-700">
      <Image src={logo} alt="Logo Sertão de Deus" width={50} height={50} />
      <ul className="hidden whitespace-nowrap md:flex">
        <li className="p-4">
          <a href="#" className="hover:text-yellow-500">
            Home
          </a>
        </li>
        <li className="p-4">
          <a href="#" className="hover:text-yellow-500">
            Quem Somos?
          </a>
        </li>
        <li className="p-4">
          <a href="#" className="hover:text-yellow-500">
            Projetos
          </a>
        </li>
        <li className="p-4">
          <a href="#" className="hover:text-yellow-500">
            Como ajudar?
          </a>
        </li>
        <li className="p-4">
          <a href="#" className="hover:text-yellow-500">
            Contato
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <X /> : <AlignJustify />}
      </div>
      <div
        className={
          nav
            ? 'fixed left-0 top-0 z-20 h-full w-[70%] border-r bg-gray-50 shadow duration-500 ease-in-out'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className="w-full p-4 font-alt text-3xl text-yellow-500">
          SERTÃO DE DEUS.
        </h1>
        <ul className="text-base uppercase">
          <li className="p-4">
            <a href="#" className="hover:text-yellow-500">
              Home
            </a>
          </li>
          <li className="p-4">
            <a href="#" className="hover:text-yellow-500">
              Quem somos?
            </a>
          </li>
          <li className="p-4">
            <a href="#" className="hover:text-yellow-500">
              Projetos
            </a>
          </li>
          <li className="p-4">
            <a href="#" className="hover:text-yellow-500">
              Como ajudar?
            </a>
          </li>
          <li className="p-4">
            <a href="#" className="hover:text-yellow-500">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
