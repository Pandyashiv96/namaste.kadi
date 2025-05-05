import React from 'react';
import { VideoCard, VideoProps } from '../ui/VideoCard';
import SectionHeading from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const featuredVideos: VideoProps[] = [
  {
    id: '1',
    title: 'Morning Bustle at Kadi Market',
    description: 'Experience the vibrant morning atmosphere at Kadi\'s traditional market where locals gather to buy fresh produce and exchange stories.',
    thumbnailUrl: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://player.vimeo.com/external/369295124.sd.mp4?s=5cd66482e3f3ef40221aeef76ac649ac23e939b4&profile_id=139&oauth2_token_id=57447761',
    category: 'Streets of Kadi',
    duration: '2:45'
  },
  {
    id: '2',
    title: 'Navratri Celebrations',
    description: 'Witness the colorful and energetic Navratri celebrations in Kadi, where tradition comes alive through dance, music, and community spirit.',
    thumbnailUrl: 'https://images.pexels.com/photos/5847455/pexels-photo-5847455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://player.vimeo.com/external/369295124.sd.mp4?s=5cd66482e3f3ef40221aeef76ac649ac23e939b4&profile_id=139&oauth2_token_id=57447761',
    category: 'Festivals',
    duration: '3:20'
  },
  {
    id: '3',
    title: 'Sunset at Kadi Lake',
    description: 'A serene evening by Kadi Lake, capturing the golden hues of sunset reflecting off the water as birds return to their nests.',
    thumbnailUrl: 'https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://player.vimeo.com/external/369295124.sd.mp4?s=5cd66482e3f3ef40221aeef76ac649ac23e939b4&profile_id=139&oauth2_token_id=57447761',
    category: 'Nature & Moods',
    duration: '1:55'
  }
];

const FeaturedVideos: React.FC = () => {
  const handleVideoClick = (video: VideoProps) => {
    console.log('Video clicked:', video);
    // Implementation for video player modal would go here
  };

  return (
    <section id="featured-videos" className="py-16 bg-beige/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Videos"
          subtitle="Explore some of our most beautiful captures that showcase the essence of Kadi."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVideos.map((video) => (
            <VideoCard key={video.id} video={video} onClick={handleVideoClick} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="primary" 
            onClick={() => window.location.href = '/videos'}
            icon={<ArrowRight size={18} />}
          >
            View All Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;