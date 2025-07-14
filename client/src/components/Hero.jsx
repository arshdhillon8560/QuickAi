import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const brands = [
  { alt: "slack", src: assets.slack },
  { alt: "framer", src: assets.framer },
  { alt: "netflix", src: assets.netflix },
  { alt: "google", src: assets.google },
  { alt: "linkedin", src: assets.linkedin },
  { alt: "instagram", src: assets.instagram },
  { alt: "facebook", src: assets.facebook },
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen pt-20 pb-10">

      {/* Headline */}
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
          Create amazing content <br /> with <span className="text-primary">AI tools</span>
        </h1>
        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto text-sm sm:text-base text-gray-600">
          Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm max-sm:text-xs mt-6">
        <button
          onClick={() => navigate('/ai')}
          className="bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer"
        >
          Start creating now
        </button>
        <button className="bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer">
          Watch demo
        </button>
      </div>

      {/* Trusted Line */}
      <div className="flex items-center gap-4 mt-8 mx-auto text-gray-600 text-sm">
        <img src={assets.user_group} alt="" className="h-8" />
        Trusted by 10k+ people
      </div>

      {/* Logos Marquee */}
      <div className="relative w-full overflow-hidden mt-12">
        <div
          className="flex gap-10 animate-marquee whitespace-nowrap"
          style={{
            animation: 'marquee 20s linear infinite',
            width: 'fit-content',
          }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <img
              key={i}
              src={brand.src}
              alt={brand.alt}
              className="h-8 sm:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              draggable="false"
            />
          ))}
        </div>
      </div>

      {/* Inline marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
