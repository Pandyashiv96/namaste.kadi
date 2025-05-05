import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Mail, Check } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter signup
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset the success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-16 bg-ochre/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre rounded-full mb-6">
            <Mail size={28} className="text-white" />
          </div>
          
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Stay updated with the latest videos, stories, and events from Kadi.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 flex-grow rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ochre focus:border-ochre"
              required
            />
            
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitted}
              className="whitespace-nowrap"
            >
              {isSubmitted ? (
                <>
                  <Check size={18} className="mr-2" />
                  Subscribed!
                </>
              ) : (
                'Subscribe Now'
              )}
            </Button>
          </form>
          
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;