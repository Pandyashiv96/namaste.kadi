import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/contact/ContactForm';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-16">
      <section className="py-16 bg-beige/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Get in Touch"
            subtitle="We'd love to hear from you! Reach out with questions, suggestions, or video submissions."
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-beige p-3 rounded-lg">
                    <MapPin size={24} className="text-ochre" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-gray-600">
                      Namaste Kadi Cultural Center<br />
                      Main Street, Kadi 382715<br />
                      Gujarat, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-beige p-3 rounded-lg">
                    <Mail size={24} className="text-ochre" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:info@namastekadi.com" className="hover:text-terracotta transition-colors">
                        info@namastekadi.com
                      </a>
                    </p>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:videos@namastekadi.com" className="hover:text-terracotta transition-colors">
                        videos@namastekadi.com
                      </a> (for video submissions)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-beige p-3 rounded-lg">
                    <Phone size={24} className="text-ochre" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <p className="text-gray-600">
                      <a href="tel:+919876543210" className="hover:text-terracotta transition-colors">
                        +91 98765 43210
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-beige p-3 rounded-lg">
                    <Clock size={24} className="text-ochre" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-1">Office Hours</h4>
                    <p className="text-gray-600">Monday to Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-beige p-3 rounded-lg">
                    <Instagram size={24} className="text-ochre" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-1">Social Media</h4>
                    <p className="text-gray-600">
                      Follow us on Instagram:{' '}
                      <a 
                        href="https://instagram.com/namaste.kadi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-ochre hover:text-terracotta transition-colors"
                      >
                        @namaste.kadi
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;