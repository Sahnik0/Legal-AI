import React from 'react';
import { Scale, Shield, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Scale className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered Legal Assistance for Indian Men
          </h1>
          <p className="text-xl mb-8 text-indigo-100">
            Get instant, accurate legal advice tailored to your situation. Our AI assistant helps you understand your rights and legal options under Indian law.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Shield className="h-8 w-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Protected Rights</h3>
              <p className="text-sm text-indigo-100">Understand and protect your legal rights with expert guidance</p>
            </div>
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <BookOpen className="h-8 w-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Legal Knowledge</h3>
              <p className="text-sm text-indigo-100">Access comprehensive information about Indian laws and regulations</p>
            </div>
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Scale className="h-8 w-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Fair Treatment</h3>
              <p className="text-sm text-indigo-100">Ensure fair and just treatment under the law</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};