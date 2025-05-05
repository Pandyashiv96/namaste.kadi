import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Instagram } from 'lucide-react';
import { Button } from '../ui/Button';

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  link: string;
}

const instagramPosts: InstagramPost[] = [
  {
    id: '1',
    imageUrl: 'https://images.pexels.com/photos/2929906/pexels-photo-2929906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Morning rituals at the local temple #KadiCulture',
    likes: 124,
    link: 'https://instagram.com/namaste.kadi'
  },
  {
    id: '2',
    imageUrl: 'https://images.pexels.com/photos/2774546/pexels-photo-2774546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Streets of Kadi come alive during the evening #StreetLife',
    likes: 156,
    link: 'https://instagram.com/namaste.kadi'
  },
  {
    id: '3',
    imageUrl: 'https://images.pexels.com/photos/3309878/pexels-photo-3309878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Traditional crafts being preserved by local artisans #Heritage',
    likes: 189,
    link: 'https://instagram.com/namaste.kadi'
  },
  {
    id: '4',
    imageUrl: 'https://images.pexels.com/photos/3617496/pexels-photo-3617496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'New developments changing the skyline of our beloved town #Progress',
    likes: 201,
    link: 'https://instagram.com/namaste.kadi'
  },
  {
    id: '5',
    imageUrl: 'https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Nature trails just outside the town limits #KadiNature',
    likes: 145,
    link: 'https://instagram.com/namaste.kadi'
  },
  {
    id: '6',
    imageUrl: 'https://images.pexels.com/photos/4508644/pexels-photo-4508644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Local food that tells stories of tradition and taste #KadiCuisine',
    likes: 178,
    link: 'https://instagram.com/namaste.kadi'
  }
];

const InstagramFeed: React.FC = () => {
  return (
    <section className="py-16 bg-beige/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Follow Us on Instagram"
          subtitle="Stay updated with our latest captures and stories from Kadi."
          centered
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <a 
              key={post.id} 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img 
                  src={post.imageUrl} 
                  alt={post.caption} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-2">
                  <p className="text-xs line-clamp-3 text-center">{post.caption}</p>
                  <div className="mt-2 flex items-center text-xs">
                    <span>♥</span>
                    <span className="ml-1">{post.likes}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            variant="outline"
            onClick={() => window.open('https://instagram.com/namaste.kadi', '_blank')}
            icon={<Instagram size={18} />}
          >
            @namaste.kadi
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;