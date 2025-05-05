import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Mail, User, MessageSquare, Send, Check } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    isVideo: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: '',
        isVideo: false
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="pl-10 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ochre focus:border-ochre"
            placeholder="John Doe"
            required
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail size={18} className="text-gray-400" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="pl-10 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ochre focus:border-ochre"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <MessageSquare size={18} className="text-gray-400" />
          </div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="pl-10 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ochre focus:border-ochre"
            placeholder="Your message here..."
            required
          ></textarea>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="isVideo"
            name="isVideo"
            checked={formData.isVideo}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-ochre focus:ring-ochre border-gray-300 rounded"
          />
          <label htmlFor="isVideo" className="ml-2 block text-sm text-gray-700">
            I would like to submit a video of Kadi
          </label>
        </div>
      </div>
      
      <Button
        type="submit"
        fullWidth
        disabled={isSubmitting || isSubmitted}
        icon={isSubmitted ? <Check size={18} /> : <Send size={18} />}
      >
        {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;