import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContent = () => {
    const contentSection = document.getElementById('featured-videos');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.pexels.com/photos/4350631/pexels-photo-4350631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        >
          <source 
            src="https://player.vimeo.com/external/369295124.sd.mp4?s=5cd66482e3f3ef40221aeef76ac649ac23e939b4&profile_id=139&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div 
        className={`relative z-10 text-center px-4 sm:px-6 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}
      >
        <h1 className="text-white font-serif font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
          Namaste Kadi
        </h1>
        <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
          Feel the vibe of Kadi through visuals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => window.location.href = '/videos'}
          >
            Explore Videos
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-white border-white hover:bg-white/20 hover:border-white"
            onClick={() => window.location.href = '/about'}
          >
            About Kadi
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer animate-bounce"
        onClick={scrollToContent}
      >
        <ChevronDown size={32} className="text-white" />
      </div>
    </div>
  );
};

export default Hero;