
import { Layout } from './components/layout/Layout';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { ChatInterface } from './components/chat/ChatInterface';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ChatProvider>
      <Layout>
        <Hero />
        <div className="container mx-auto px-4 py-12">
          <ChatInterface />
        </div>
        <Features />
      </Layout>
    </ChatProvider>
  );
}

export default App;