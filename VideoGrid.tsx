import React, { useState } from 'react';
import { VideoCard, VideoProps } from '../ui/VideoCard';
import VideoFilters, { VideoCategory } from './VideoFilters';
import SectionHeading from '../ui/SectionHeading';
import { X } from 'lucide-react';

// Mock video data
const allVideos: VideoProps[] = [
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
  },
  {
    id: '4',
    title: 'Kadi Temple Procession',
    description: 'Annual temple procession through the streets of Kadi, celebrating age-old traditions with music, colors, and community participation.',
    thumbnailUrl: 'https://images.pexels.com/photos/12788639/pexels-photo-12788639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://player.vimeo.com/external/369295124.sd.mp4?s=5cd66482e3f3ef40221aeef76ac649ac23e939b4&profile_id=139&oauth2_token_id=57447761',
    category: 'Festivals',
    duration: '4:10'
  },
  {
    id: '5',
    title: 'Modern Kadi Skyline',
    description: 'The evolving skyline of Kadi, where traditional architecture meets modern buildings, creating a unique visual contrast.',
    thumbnailUrl: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://player.vimeo.com/external/369295124.sd.mp4?s=5cd66482e3f3ef40221aeef76ac649ac23e939b4&profile_id=139&oauth2_token_id=57447761',
    category: 'Old vs New',
    duration: '2:30'
  },
  {
    id: '6',
    title: 'Artisans of Kadi',
    description: 'Following the daily lives of traditional artisans keeping heritage crafts alive in the streets of Kadi.',
    thumbnailUrl: 'https://images.pexels.com/photos/3523519/pexels-photo-3523519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://player.vimeo.com/external/369295124.sd.mp4?s=5cd66482e3f3ef40221aeef76ac649ac23e939b4&profile_id=139&oauth2_token_id=57447761',
    category: 'Streets of Kadi',
    duration: '3:50'
  },
  {
    id: '7',
    title: 'Monsoon in Kadi',
    description: 'The refreshing monsoon season transforming Kadi with lush greenery and the rhythm of raindrops creating a peaceful atmosphere.',
    thumbnailUrl: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://player.vimeo.com/external/369295124.sd.mp4?s=5cd66482e3f3ef40221aeef76ac649ac23e939b4&profile_id=139&oauth2_token_id=57447761',
    category: 'Nature & Moods',
    duration: '2:15'
  },
  {
    id: '8',
    title: 'Kadi Railway Station',
    description: 'The historic railway station that has been a gateway to Kadi for generations, now blending heritage architecture with modern amenities.',
    thumbnailUrl: 'https://images.pexels.com/photos/730134/pexels-photo-730134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://player.vimeo.com/external/369295124.sd.mp4?s=5cd66482e3f3ef40221aeef76ac649ac23e939b4&profile_id=139&oauth2_token_id=57447761',
    category: 'Old vs New',
    duration: '3:05'
  }
];

const VideoGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>('All');
  const [selectedVideo, setSelectedVideo] = useState<VideoProps | null>(null);

  const filteredVideos = activeCategory === 'All' 
    ? allVideos 
    : allVideos.filter(video => video.category === activeCategory);

  const handleCategoryChange = (category: VideoCategory) => {
    setActiveCategory(category);
  };

  const handleVideoClick = (video: VideoProps) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Explore Kadi Videos"
          subtitle="Discover the beauty, culture, and everyday life of Kadi through our curated video collection."
          centered
        />
        
        <VideoFilters 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChange} 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} onClick={handleVideoClick} />
          ))}
        </div>
        
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No videos found in this category.</p>
          </div>
        )}
      </div>
      
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden">
            <button 
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md"
              aria-label="Close video"
            >
              <X size={24} />
            </button>
            
            <div className="aspect-video w-full">
              <video 
                src={selectedVideo.videoUrl} 
                controls 
                autoPlay 
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            
            <div className="p-6">
              <h3 className="font-serif text-2xl font-semibold mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-600 mb-4">{selectedVideo.description}</p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-sm bg-beige text-gray-700">
                  {selectedVideo.category}
                </span>
                <span className="text-sm text-gray-500">{selectedVideo.duration}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGrid;