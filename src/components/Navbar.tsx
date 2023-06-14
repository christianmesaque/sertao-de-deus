'use client'
import React, { useState } from 'react'
import { X, AlignJustify } from 'lucide-react'
import Image from 'next/image'
import logo from '../app/icon.png'
import Link from 'next/link'

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
          <Link href={'/'} className="hover:text-yellow-500">
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link href={'/quemSomos'} className="hover:text-yellow-500">
            Quem somos?
          </Link>
        </li>
        <li className="p-4">
          <Link href={'/projetos'} className="hover:text-yellow-500">
            Projetos
          </Link>
        </li>
        <li className="p-4">
          <Link href={'/comoAjudar'} className="hover:text-yellow-500">
            Como Ajudar?
          </Link>
        </li>
        <li className="p-4">
          <Link href={'/contato'} className="hover:text-yellow-500">
            Contato
          </Link>
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
            <Link href={'/'} className="hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link href={'/quemSomos'} className="hover:text-yellow-500">
              Quem somos?
            </Link>
          </li>
          <li className="p-4">
            <Link href={'/projetos'} className="hover:text-yellow-500">
              Projetos
            </Link>
          </li>
          <li className="p-4">
            <Link href={'/comoAjudar'} className="hover:text-yellow-500">
              Como Ajudar?
            </Link>
          </li>
          <li className="p-4">
            <Link href={'/contato'} className="hover:text-yellow-500">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
