import React from 'react';

export type VideoCategory = 'All' | 'Streets of Kadi' | 'Festivals' | 'Nature & Moods' | 'Old vs New';

interface VideoFiltersProps {
  activeCategory: VideoCategory;
  onCategoryChange: (category: VideoCategory) => void;
}

const VideoFilters: React.FC<VideoFiltersProps> = ({ activeCategory, onCategoryChange }) => {
  const categories: VideoCategory[] = [
    'All',
    'Streets of Kadi',
    'Festivals',
    'Nature & Moods',
    'Old vs New'
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category
              ? 'bg-ochre text-white'
              : 'bg-beige/50 text-gray-700 hover:bg-beige'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default VideoFilters;