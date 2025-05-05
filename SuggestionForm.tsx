import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Lightbulb, Check } from 'lucide-react';

const SuggestionForm: React.FC = () => {
  const [suggestion, setSuggestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Suggestion submitted:', suggestion);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSuggestion('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <label htmlFor="suggestion" className="block text-lg font-medium text-gray-800 mb-2">
          Your Suggestion
        </label>
        <textarea
          id="suggestion"
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          rows={5}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ochre focus:border-ochre"
          placeholder="Share your ideas about what you'd like to see on Namaste Kadi..."
          required
        ></textarea>
      </div>
      
      <Button
        type="submit"
        fullWidth
        disabled={isSubmitting || isSubmitted}
        icon={isSubmitted ? <Check size={18} /> : <Lightbulb size={18} />}
      >
        {isSubmitting ? 'Submitting...' : isSubmitted ? 'Thanks for your suggestion!' : 'Submit Suggestion'}
      </Button>
    </form>
  );
};

export default SuggestionForm;