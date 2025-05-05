import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedVideos from '../components/home/FeaturedVideos';
import AboutPreview from '../components/home/AboutPreview';
import InstagramFeed from '../components/home/InstagramFeed';
import NewsletterSection from '../components/home/NewsletterSection';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedVideos />
      <AboutPreview />
      <InstagramFeed />
      <NewsletterSection />
    </div>
  );
};

export default Home;