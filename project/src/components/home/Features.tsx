import React from 'react';
import { MessageSquare, Clock, Shield, BookOpen } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How LegalAI Helps You</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <MessageSquare className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Consultation</h3>
            <p className="text-gray-600">Get immediate responses to your legal queries 24/7</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Clock className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Time-Saving</h3>
            <p className="text-gray-600">Quick answers without waiting for traditional consultations</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Shield className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Privacy Protected</h3>
            <p className="text-gray-600">Confidential conversations with end-to-end security</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <BookOpen className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Educational</h3>
            <p className="text-gray-600">Learn about your rights and legal procedures</p>
          </div>
        </div>
      </div>
    </section>
  );
};