import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import SuggestionForm from '../components/suggestions/SuggestionForm';
import FeedbackPoll from '../components/suggestions/FeedbackPoll';

const Suggestions: React.FC = () => {
  const pollQuestions = [
    {
      question: "What type of videos would you like to see more of?",
      options: [
        { id: "street", text: "Streets of Kadi" },
        { id: "festivals", text: "Festivals & Celebrations" },
        { id: "nature", text: "Nature & Landscapes" },
        { id: "oldvsnew", text: "Old vs New Kadi" },
        { id: "food", text: "Local Cuisine" }
      ]
    },
    {
      question: "How often should we release new videos?",
      options: [
        { id: "daily", text: "Daily" },
        { id: "weekly", text: "Weekly" },
        { id: "biweekly", text: "Twice a month" },
        { id: "monthly", text: "Monthly" }
      ]
    }
  ];
  
  return (
    <div className="pt-16">
      <section className="py-16 bg-beige/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Suggestions & Feedback"
            subtitle="Help us make Namaste Kadi better by sharing your ideas and opinions."
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-6">Share Your Ideas</h3>
                <p className="text-gray-600 mb-6">
                  We value your input! Let us know what aspects of Kadi you'd like to see featured, 
                  or any suggestions you have to improve our website and content.
                </p>
                <SuggestionForm />
              </div>
              
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-6">Community Polls</h3>
                <p className="text-gray-600 mb-6">
                  Participate in our polls to help shape the future of Namaste Kadi. 
                  Your opinion matters to us!
                </p>
                
                <div className="space-y-8">
                  {pollQuestions.map((poll, index) => (
                    <FeedbackPoll 
                      key={index}
                      question={poll.question}
                      options={poll.options}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-center">Recent Suggestions</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white p-5 rounded-lg shadow-md">
                    <p className="text-gray-600 italic mb-4">
                      "It would be amazing to see a video series on the seasonal changes in Kadi, showing how the town transforms through different times of the year."
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">- Ravi P.</span>
                      <span className="text-xs bg-beige/50 px-2 py-1 rounded-full text-gray-700">
                        Under consideration
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Suggestions;