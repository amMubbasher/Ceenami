'use client'

import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(!menuOpen)

    const links = [
        { name: 'CleanNami', url: 'https://cleannami.ceenami.com' },
        { name: 'Ceenami Haus', url: 'https://ceenamihaus.ceenami.com' },
        { name: 'Shop', url: 'https://shop.ceenami.com' },
    ]

    return (
        <nav className="w-full bg-black text-white fixed top-0 left-0 z-50 shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo (Arkhip font) */}
                <Link
                    href="/"
                    className="text-3xl text-red-500"
                    style={{ fontFamily: 'Arkhip' }}
                >
                    Ceenami
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            className="px-4 py-2 border border-white/30 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-colors duration-300"
                            target={link.url.startsWith('http') ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-black px-4 pb-4">
                    <div className="flex flex-col gap-4">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                className="px-4 py-2 border border-white/30 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-colors duration-300"
                                onClick={() => setMenuOpen(false)}
                                target={link.url.startsWith('http') ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
