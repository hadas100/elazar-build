import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Construction Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 to-secondary-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-primary-500 font-bold text-lg md:text-xl mb-4 tracking-wider uppercase">
          אמינות • מקצועיות • איכות
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          בונים את <span className="text-primary-500">החלום</span> שלך
          <br />
          במציאות
        </h1>
        <p className="text-lg md:text-2xl text-secondary-200 mb-10 max-w-2xl mx-auto font-light">
          אלעזר קבלן שיפוצים - מומחים בהפוך כל חלל לפנינה עיצובית.
          משיפוץ חדר רחצה ועד בנייה מאפס, אנחנו כאן בשבילך.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-primary-900/20"
          >
            לצפייה בפרויקטים
            <ArrowLeft size={20} />
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary-900 px-8 py-4 rounded-lg text-lg font-bold transition-all flex items-center justify-center"
          >
            צור קשר לייעוץ
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
