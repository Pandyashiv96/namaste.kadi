import React from 'react';
import { Play } from 'lucide-react';

export interface VideoProps {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  category: string;
  duration: string;
}

interface VideoCardProps {
  video: VideoProps;
  onClick?: (video: VideoProps) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(video);
    }
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer"
      onClick={handleClick}
    >
      <div className="aspect-video overflow-hidden bg-gray-200">
        <img 
          src={video.thumbnailUrl} 
          alt={video.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/90 rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play size={24} className="text-terracotta" />
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-white">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium px-2 py-1 bg-beige rounded-full text-gray-700">
            {video.category}
          </span>
          <span className="text-xs text-gray-500">{video.duration}</span>
        </div>
        <h3 className="font-serif text-lg font-medium text-gray-900 mb-1">
          {video.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {video.description}
        </p>
      </div>
    </div>
  );
};