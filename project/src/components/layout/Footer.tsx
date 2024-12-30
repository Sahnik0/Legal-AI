import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LegalAI India</h3>
            <p className="text-gray-300">
              Empowering men with AI-powered legal assistance in India.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">Email: tb123983@gmail.com</p>
            <p className="text-gray-300 flex items-center">
              <img
                src="data:image/png;base64,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"
                alt="LinkedIn Logo"
                className="h-5 w-5 mr-2"
              />
              <a
                href="https://www.linkedin.com/in/sahnik-biswas-8514012a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
              >
                LinkedIn
              </a>
            </p>
            <p className="text-gray-300 flex items-center">
              <img
                src="https://img.icons8.com/pulsar-color/96/github.png"
                alt="GitHub Logo"
                className="h-5 w-5 mr-2"
              />
              <a
                href="https://github.com/Sahnik0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
              >
                GitHub
              </a>
            </p>
            <p className="text-gray-300 flex items-center">
              <img
                src="https://img.icons8.com/fluency/96/instagram-new.png"
                alt="Instagram Logo"
                className="h-5 w-5 mr-2"
              />
              <a
                href="https://www.instagram.com/sahnik_biswas/profilecard/?igsh=MngxazdnMjFmcDdl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} LegalAI India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
