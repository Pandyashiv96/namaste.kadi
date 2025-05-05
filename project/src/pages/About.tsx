import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

const About: React.FC = () => {
  return (
    <div className="pt-16">
      <section className="py-16 bg-beige/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="About Kadi"
              subtitle="Discover the heart and soul of our beautiful town in Gujarat."
              centered
            />
            
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Nestled in the heart of Gujarat, Kadi is a picturesque town that beautifully balances tradition with modernity. 
                With a history dating back several centuries, Kadi has evolved from a small settlement to a thriving urban center 
                while preserving its rich cultural heritage.
              </p>
              
              <h3 className="font-serif">Historical Background</h3>
              <p>
                Kadi's history is intertwined with Gujarat's cultural evolution. Originally established as a trading post, 
                the town gained prominence during the medieval period as a center for textile production and commerce. 
                The architectural remnants of this era can still be spotted throughout the town, from ancient step wells 
                to ornate temples that have stood the test of time.
              </p>
              
              <h3 className="font-serif">Cultural Heritage</h3>
              <p>
                The cultural fabric of Kadi is woven with diverse traditions, festivals, and artistic expressions. 
                The town is known for its vibrant celebrations of Navratri, Diwali, and Uttarayan (kite festival), 
                where locals come together in joyous festivities that reflect Gujarat's spirited culture.
              </p>
              <p>
                Local craftsmanship is another highlight, with artisans skilled in traditional embroidery, pottery, 
                and woodwork. These age-old techniques have been passed down through generations, creating unique 
                artifacts that tell stories of Kadi's artistic heritage.
              </p>
              
              <h3 className="font-serif">Modern Development</h3>
              <p>
                In recent decades, Kadi has embraced development while maintaining its cultural identity. 
                New educational institutions, healthcare facilities, and commercial centers have emerged, 
                creating a dynamic urban landscape that serves the needs of its growing population.
              </p>
              <p>
                The town's infrastructure has seen significant improvements, with better roads, public spaces, 
                and connectivity to major cities in Gujarat. Despite these changes, Kadi has managed to preserve 
                its small-town charm and community spirit.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold mb-4">Fun Facts About Kadi</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-ochre text-white text-xs mr-3 mt-0.5">1</span>
                  <span>Kadi is home to one of the oldest continuously operating traditional markets in Gujarat, dating back over 200 years.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-ochre text-white text-xs mr-3 mt-0.5">2</span>
                  <span>The town has a unique kite-making tradition, with local artisans creating intricate designs that are sought after during the annual Uttarayan festival.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-ochre text-white text-xs mr-3 mt-0.5">3</span>
                  <span>Kadi's central lake is believed to have healing properties according to local folklore, attracting visitors seeking wellness.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold mb-4">Hidden Gems</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-ochre text-white text-xs mr-3 mt-0.5">1</span>
                  <span>The Ancient Banyan Grove on the outskirts of town features trees over 300 years old, creating a mystical atmosphere.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-ochre text-white text-xs mr-3 mt-0.5">2</span>
                  <span>Kadi's underground step well (vav) is a magnificent architectural marvel that remains largely unknown to tourists.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-ochre text-white text-xs mr-3 mt-0.5">3</span>
                  <span>The Sunset Point at Kadi Hills offers breathtaking panoramic views of the entire town and surrounding countryside.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold mb-4">What Makes Kadi Unique</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-ochre text-white text-xs mr-3 mt-0.5">1</span>
                  <span>The harmonious blend of traditional and modern architecture creates a visual tapestry unique to Kadi.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-ochre text-white text-xs mr-3 mt-0.5">2</span>
                  <span>Local culinary specialties feature rare spice blends that have been kept secret for generations.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-ochre text-white text-xs mr-3 mt-0.5">3</span>
                  <span>The town's community-based approach to preserving cultural heritage has been recognized nationally as a model for other small towns.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-ochre/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Experience Kadi Yourself</h2>
            <p className="text-lg text-gray-700 mb-8">
              Ready to explore the beauty and culture of Kadi? Plan your visit or browse through our video collection to get a taste of what awaits you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => window.location.href = '/videos'}>
                Watch Kadi Videos
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/contact'}>
                Contact Us for Information
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;