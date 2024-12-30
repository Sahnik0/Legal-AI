import React from 'react';
import { Message } from '../../types';
import { User, Bot } from 'lucide-react';

interface Props {
  message: Message;
}

export const MessageBubble: React.FC<Props> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex items-start space-x-2 max-w-[80%] ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          isUser ? 'bg-indigo-100' : 'bg-gray-100'
        }`}>
          {isUser ? <User className="w-5 h-5 text-indigo-600" /> : <Bot className="w-5 h-5 text-gray-600" />}
        </div>
        
        <div className={`rounded-lg p-4 ${
          isUser 
            ? 'bg-indigo-600 text-white' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          <p className="whitespace-pre-wrap">{message.content}</p>
          <span className="text-xs opacity-75 block mt-2">
            {new Date(message.timestamp).toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
};