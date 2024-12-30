import React from 'react';
import { MessageBubble } from './MessageBubble';
import { InputArea } from './InputArea';
import { useChat } from '../../context/ChatContext';

export const ChatInterface: React.FC = () => {
  const { messages } = useChat();
  const chatRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="bg-white rounded-lg shadow-lg h-[600px] flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Legal Assistant</h2>
      </div>
      
      <div 
        ref={chatRef}
        className="flex-1 overflow-y-auto p-4 space-y-4"
      >
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>

      <InputArea />
    </div>
  );
};