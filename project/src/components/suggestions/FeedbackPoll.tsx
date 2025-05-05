import React, { useState } from 'react';

interface PollOption {
  id: string;
  text: string;
}

interface PollProps {
  question: string;
  options: PollOption[];
}

const FeedbackPoll: React.FC<PollProps> = ({ question, options }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [results, setResults] = useState<Record<string, number>>({});
  
  const handleVote = () => {
    if (!selectedOption) return;
    
    // Simulate voting and results
    const totalVotes = Math.floor(Math.random() * 50) + 20; // Random between 20-70
    const newResults: Record<string, number> = {};
    
    // Distribute votes among options
    let remainingVotes = totalVotes;
    options.forEach((option, index) => {
      if (index === options.length - 1) {
        newResults[option.id] = remainingVotes;
      } else {
        const votes = Math.floor(Math.random() * remainingVotes * 0.7);
        newResults[option.id] = votes;
        remainingVotes -= votes;
      }
    });
    
    // Ensure selected option has some votes
    if (newResults[selectedOption] < 5) {
      newResults[selectedOption] = 5;
    }
    
    setResults(newResults);
    setHasVoted(true);
  };
  
  const getTotalVotes = () => {
    return Object.values(results).reduce((sum, votes) => sum + votes, 0);
  };
  
  const getPercentage = (votes: number) => {
    const total = getTotalVotes();
    return total > 0 ? Math.round((votes / total) * 100) : 0;
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-serif font-semibold mb-4">{question}</h3>
      
      <div className="space-y-3 mb-6">
        {options.map((option) => (
          <div key={option.id}>
            {!hasVoted ? (
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="poll"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={() => setSelectedOption(option.id)}
                  className="h-4 w-4 text-ochre focus:ring-ochre border-gray-300"
                />
                <span className="ml-2 text-gray-700">{option.text}</span>
              </label>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-700">{option.text}</span>
                  <span className="text-sm font-medium">
                    {getPercentage(results[option.id])}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${selectedOption === option.id ? 'bg-ochre' : 'bg-gray-400'}`}
                    style={{ width: `${getPercentage(results[option.id])}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {results[option.id]} votes
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {!hasVoted && (
        <button
          onClick={handleVote}
          disabled={!selectedOption}
          className={`w-full py-2 rounded-md font-medium transition-colors ${
            selectedOption
              ? 'bg-ochre text-white hover:bg-terracotta'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          Vote
        </button>
      )}
      
      {hasVoted && (
        <div className="text-center text-sm text-gray-500 pt-2">
          Thank you for your feedback! Total votes: {getTotalVotes()}
        </div>
      )}
    </div>
  );
};

export default FeedbackPoll;