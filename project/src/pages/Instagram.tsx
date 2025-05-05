import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Instagram as InstagramIcon } from 'lucide-react';

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
  link: string;
}

const instagramPosts: InstagramPost[] = [
  {
    id: '1',
    imageUrl: 'https://images.pexels.com/photos/2929906/pexels-photo-2929906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Morning rituals at the local temple. The peaceful atmosphere here is something everyone should experience. #KadiCulture #MorningVibes #TempleLife',
    likes: 124,
    comments: 18,
    date: '2 days ago',
    link: 'https://instagram.com/namaste.kadi'
  },
  {
    id: '2',
    imageUrl: 'https://images.pexels.com/photos/2774546/pexels-photo-2774546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Streets of Kadi come alive during the evening. The golden hour casts a magical glow on these historic pathways. #StreetLife #EveningVibes #KadiMoments',
    likes: 156,
    comments: 23,
    date: '5 days ago',
    link: 'https://instagram.com/namaste.kadi'
  },
  {
    id: '3',
    imageUrl: 'https://images.pexels.com/photos/3309878/pexels-photo-3309878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Traditional crafts being preserved by local artisans. Their dedication to keeping these art forms alive is truly inspiring. #Heritage #Craftsmanship #KadiArtisans',
    likes: 189,
    comments: 32,
    date: '1 week ago',
    link: 'https://instagram.com/namaste.kadi'
  },
  {
    id: '4',
    imageUrl: 'https://images.pexels.com/photos/3617496/pexels-photo-3617496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'New developments changing the skyline of our beloved town. A perfect blend of tradition and modernity. #Progress #ModernKadi #CityDevelopment',
    likes: 201,
    comments: 27,
    date: '10 days ago',
    link: 'https://instagram.com/namaste.kadi'
  },
  {
    id: '5',
    imageUrl: 'https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Nature trails just outside the town limits. A perfect escape for weekend adventures and reconnecting with nature. #KadiNature #WeekendGetaway #NatureLover',
    likes: 145,
    comments: 19,
    date: '2 weeks ago',
    link: 'https://instagram.com/namaste.kadi'
  },
  {
    id: '6',
    imageUrl: 'https://images.pexels.com/photos/4508644/pexels-photo-4508644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Local food that tells stories of tradition and taste. These flavors have been perfected over generations. #KadiCuisine #FoodStories #GujaratiFood',
    likes: 178,
    comments: 24,
    date: '2 weeks ago',
    link: 'https://instagram.com/namaste.kadi'
  },
  {
    id: '7',
    imageUrl: 'https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Festival preparations in full swing! The excitement in the air is palpable as the town gets ready for celebrations. #KadiFestival #Celebrations #CommunitySpirit',
    likes: 212,
    comments: 34,
    date: '3 weeks ago',
    link: 'https://instagram.com/namaste.kadi'
  },
  {
    id: '8',
    imageUrl: 'https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Ancient architecture that stands as a testament to our rich history. Every brick has a story to tell. #HeritageBuildings #KadiHistory #ArchitecturalBeauty',
    likes: 167,
    comments: 21,
    date: '3 weeks ago',
    link: 'https://instagram.com/namaste.kadi'
  },
  {
    id: '9',
    imageUrl: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'The local market bustling with activity. From fresh produce to handcrafted items, you can find everything here. #KadiMarket #LocalShopping #MarketLife',
    likes: 193,
    comments: 29,
    date: '1 month ago',
    link: 'https://instagram.com/namaste.kadi'
  }
];

const Instagram: React.FC = () => {
  return (
    <div className="pt-16">
      <section className="py-16 bg-beige/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="@namaste.kadi"
            subtitle="Follow us on Instagram for daily updates, behind-the-scenes content, and community highlights."
            centered
          />
          
          <div className="flex justify-center mb-10">
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.open('https://instagram.com/namaste.kadi', '_blank')}
              icon={<InstagramIcon size={20} />}
            >
              Follow @namaste.kadi
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {instagramPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={`Instagram post: ${post.caption.substring(0, 30)}...`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </a>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <img 
                        src="https://images.pexels.com/photos/2249961/pexels-photo-2249961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Namaste Kadi" 
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="ml-2 font-medium">namaste.kadi</span>
                    </div>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                    {post.caption}
                  </p>
                  
                  <div className="flex justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <span className="mr-1">♥</span>
                      <span>{post.likes} likes</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-1">💬</span>
                      <span>{post.comments} comments</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instagram;