// src/components/Hero.jsx

const Hero = () => {
    return (
        <section className="relative h-screen w-full bg-[#F2F0E9] flex items-center justify-center px-6 overflow-hidden">
            <div className="relative z-10 text-center">
        <span className="block text-stone-500 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-8 md:mb-12 font-medium">
          Spring / Summer 2025
        </span>

                <h1 className="text-stone-900 text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-light tracking-tighter leading-[0.85] mb-6 md:mb-8">
                    DASTAAN
                </h1>

                <div className="w-16 h-px bg-stone-400 mx-auto mb-6 md:mb-8" />

                <p className="text-stone-600 text-base md:text-lg font-light tracking-wide max-w-md mx-auto mb-10 md:mb-14 leading-relaxed px-4">
                    Minimalist luxury for the modern wardrobe.
                </p>

                <a
                    href="/shop"
                    className="inline-block px-10 py-3 md:px-12 md:py-4 bg-stone-900 text-[#F2F0E9] text-xs tracking-[0.3em] uppercase font-medium hover:bg-stone-800 transition-colors duration-500"
                >
                    Shop Now
                </a>
            </div>
        </section>
    );
};

export default Hero;