'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import frontImg2 from '../assets/front-img-2.jpg'

export default function AboutSection() {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [])

    return (
        <section className="bg-black py-20 px-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

                {/* Optional Visual Accent */}
                <div className="hidden lg:block w-full max-w-sm rounded-xl overflow-hidden shadow-md">
                    <Image
                        src={frontImg2}
                        alt="Ceenami Visual"
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Text Card */}
                <div
                    ref={ref}
                    className={`w-full max-w-3xl transition-all duration-1000 ease-in-out rounded-xl p-8 bg-black/40 backdrop-blur-md shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-500 text-center lg:text-left" style={{ fontFamily: 'Arkhip' }}>
                        About Ceenami
                    </h2>
                    <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                        Described as a thoughtful artist with no boundaries, <span style={{ fontFamily: 'Arkhip' }}> Ceenami </span> isn’t boxed in by genre labels. His sound blends catchy pop energy with hip-hop rhythm and real, heartfelt lyrics that shift with each release.
                    </p>
                    <p className="text-lg md:text-xl text-blue-100 mt-4 leading-relaxed">
                        From Orlando, Florida to fans in Brazil, Germany, Mexico, and the US, <span style={{ fontFamily: 'Arkhip' }}> Ceenami’s </span> music jumps from bangers to pop hits to deep reflections without skipping a beat. His talent and drive keep pushing him forward in a way that stands out across the music world.
                    </p>
                </div>
            </div>
        </section>
    )
}
