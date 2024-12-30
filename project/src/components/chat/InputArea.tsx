import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useChat } from '../../context/ChatContext';
import { Button } from '../common/Button';

export const InputArea: React.FC = () => {
  const [input, setInput] = useState('');
  const { sendMessage, isLoading } = useChat();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    await sendMessage(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="border-t p-4">
      <div className="flex space-x-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your legal concern..."
          className="flex-1 resize-none rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={3}
        />
        <Button 
          type="submit" 
          disabled={isLoading || !input.trim()}
          className="self-end"
        >
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </form>
  );
};