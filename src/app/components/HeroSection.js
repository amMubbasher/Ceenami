'use client'

import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'
import Image from 'next/image'

import { FaPause, FaPlay } from 'react-icons/fa'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

import frontImg1 from '../assets/front-img-1.jpg'
import frontImg2 from '../assets/front-img-2.jpg'
import frontImg3 from '../assets/front-img-3.jpg'
import frontImg4 from '../assets/front-img-4.jpg'

const images = [frontImg1, frontImg2, frontImg3, frontImg4]

export default function HeroSection() {
    const [autoplaying, setAutoplaying] = useState(true)
    const swiperRef = useRef(null)

    const toggleAutoplay = () => {
        if (!swiperRef.current) return

        if (autoplaying) {
            swiperRef.current.autoplay.stop()
            setAutoplaying(false)
        } else {
            swiperRef.current.autoplay.start()
            setAutoplaying(true)
        }
    }

    return (
        <section className="w-full bg-black text-white mt-10 min-h-[100vh] flex items-center bg-[url('/grid-dark.svg')] bg-cover">
            <div className="max-lg:pt-20 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-4">

                {/* Left Side */}
                <div className="w-full lg:w-1/2 text-center lg:text-left p-6 rounded-lg bg-black/40 backdrop-blur-sm shadow-lg">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow" style={{ fontFamily: 'Arkhip' }}>
                        Ceenami
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-blue-200">
                        Thoughtful Artist with No Boundaries
                    </p>
                    <button
                        onClick={() => window.open('https://linktr.ee/ceenami', '_blank')}
                        className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full border-2 border-red-700 shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                    >
                        Stream (new song name) here!
                    </button>
                </div>

                {/* Right Side - Swiper Carousel */}
                <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl relative group">
                    <Swiper
                        modules={[Autoplay, EffectFade, Navigation]}
                        effect="fade"
                        loop
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.swiper-next',
                            prevEl: '.swiper-prev',
                        }}
                        className="w-full h-full"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-full">
                                    <Image
                                        src={img}
                                        alt={`Ceenami Slide ${index + 1}`}
                                        className="object-cover"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        placeholder="blur"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Arrows */}
                    <button className="swiper-prev absolute left-3 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition">
                        <MdArrowBackIos size={20} />
                    </button>
                    <button className="swiper-next absolute right-3 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition">
                        <MdArrowForwardIos size={20} />
                    </button>

                    {/* Play/Pause Toggle */}
                    <button
                        className="absolute bottom-3 right-3 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
                        onClick={toggleAutoplay}
                    >
                        {autoplaying ? <FaPause size={16} /> : <FaPlay size={16} />}
                    </button>
                </div>
            </div>
        </section>
    )
}
