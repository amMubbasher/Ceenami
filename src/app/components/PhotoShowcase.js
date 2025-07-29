
'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import { PhotoProvider, PhotoView } from 'react-photo-view'
import { FaPause, FaPlay } from 'react-icons/fa'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

import frontImg1 from '../assets/front-img-1.jpg'
import frontImg2 from '../assets/front-img-2.jpg'
import frontImg3 from '../assets/front-img-3.jpg'
import frontImg4 from '../assets/front-img-4.jpg'
import frontImg5 from '../assets/front-img-5.jpg'

const images = [
    { src: frontImg1, caption: 'Studio Session' },
    { src: frontImg2, caption: 'Live Performance' },
    { src: frontImg5, caption: 'Backstage Moment' },
    { src: frontImg3, caption: 'Behind the Scenes' },
    { src: frontImg4, caption: 'Cover Shoot' },
]

export default function PhotoShowcase() {
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
        <section className="bg-black text-white py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-400">
                    Visuals of <span style={{ fontFamily: 'Arkhip' }}> Ceenami </span>
                </h2>

                <div className="relative group">
                    <PhotoProvider>
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            loop={true}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            autoplay={autoplaying ? {
                                delay: 3000,
                                disableOnInteraction: false,
                            } : false}
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                            navigation={{
                                nextEl: '.swiper-next',
                                prevEl: '.swiper-prev',
                            }}
                        >
                            {images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <PhotoView src={img.src.src}>
                                        <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square w-full h-[400px] cursor-zoom-in">
                                            <Image
                                                src={img.src}
                                                alt={`Ceenami Photo ${index + 1}`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                placeholder="blur"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {img.caption}
                                            </div>
                                        </div>
                                    </PhotoView>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </PhotoProvider>

                    {/* Navigation Arrows */}
                    <button className="swiper-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition">
                        <MdArrowBackIos size={18} />
                    </button>
                    <button className="swiper-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition">
                        <MdArrowForwardIos size={18} />
                    </button>

                    {/* Play / Pause Button */}
                    <button
                        className="absolute bottom-3 right-3 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
                        onClick={toggleAutoplay}
                    >
                        {autoplaying ? <FaPause size={14} /> : <FaPlay size={14} />}
                    </button>
                </div>
            </div>
        </section>
    )
}
