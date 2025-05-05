import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Button } from '../ui/Button';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              title="About Kadi"
              subtitle="A blend of tradition and modernity in the heart of Gujarat."
            />
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Nestled in the heart of Gujarat, Kadi is a charming town with a rich cultural heritage dating back centuries.
                Known for its vibrant community, traditional crafts, and evolving landscape, Kadi represents the perfect
                harmony between preserving traditions and embracing progress.
              </p>
              <p>
                From the bustling streets lined with local vendors to the serene temples that stand as testaments to
                architectural brilliance, every corner of Kadi has a story to tell.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center text-ochre font-bold text-xl">
                  65
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-500">Historical Sites</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center text-ochre font-bold text-xl">
                  12
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-500">Annual Festivals</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center text-ochre font-bold text-xl">
                  30+
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-500">Local Artisans</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button onClick={() => window.location.href = '/about'}>
                Learn More About Kadi
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Kadi town"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-1/2 aspect-square rounded-lg overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://images.pexels.com/photos/4509131/pexels-photo-4509131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Traditional craft of Kadi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;