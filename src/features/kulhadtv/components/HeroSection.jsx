import { useState, useEffect } from 'react';
import boloo from '../../../assets/boloo.jpeg';

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideshowImages = [
        'https://www.dishadaily.com/h-upload/2023/08/10/246817-jailer.webp',
        'https://images.ottplay.com/images/media/gallery/pushpa-2-movie-review-4-1-1733372291.jpg',
        'https://images.justwatch.com/backdrop/312117355/s640/siddharth-roy',
        'https://assets.thehansindia.com/h-upload/2022/07/29/1305321-ramarao-on-duty-movie-review.webp',
        'https://st1.latestly.com/wp-content/uploads/2024/01/Guntur-Kaaram-Movie-Leaked-380x214.jpg'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [slideshowImages.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="w-full py-8 px-4 md:px-8 bg-[#0a1929] md:pt-[70px]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-4 md:gap-10">
                    {/* Left Card - Studio Image */}
                    <div className="flex justify-center items-stretch">
                        <div className="relative w-full h-64 md:h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={boloo}
                                alt="Studio Equipment"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                            <div className="absolute top-4 left-4 md:top-6 md:left-6">
                                <div className="bg-cyan-500/90 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl shadow-lg">
                                    <span className="text-white font-semibold text-sm md:text-base">
                                        Our Studio
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Card - Coming Soon Slideshow */}
                    <div className="bg-[#213f5b] p-6 md:p-8 flex flex-col gap-4 md:gap-6 items-center justify-center rounded-2xl md:rounded-3xl shadow-2xl">
                        {/* Image Container */}
                        <div className="relative w-full h-48 md:h-56 lg:h-64 rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
                            {slideshowImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                        }`}
                                />
                            ))}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                        </div>

                        {/* Slide Indicators */}
                        <div className="flex gap-2 md:gap-3">
                            {slideshowImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                    className={`transition-all duration-300 rounded-full ${index === currentSlide
                                            ? 'w-8 md:w-10 h-2 bg-white'
                                            : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}