import { FaFileAlt, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';

export default function Submission() {
  const guidelines = [
    'Papers must be original and not previously published',
    'Maximum length: 6 pages (IEEE format)',
    'All submissions must be in English',
    'Papers must follow IEEE conference template',
    'Submit through the conference management system',
    'All papers will undergo double-blind peer review',
  ];

  const importantDates = [
    { event: 'Announcement Date', date: 'June 2026' },
    { event: 'Paper Submission Deadline', date: 'TBA' },
    { event: 'Acceptance Notification', date: 'TBA' },
    { event: 'Camera-Ready Submission', date: 'TBA' },
    { event: 'Early Bird Registration', date: 'TBA' },
    { event: 'Conference Dates', date: 'February 2027' },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-diu-green">
          Paper Submission
        </h1>

        <div className="max-w-4xl mx-auto">
          {/* Submission Guidelines */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-center mb-6">
              <FaFileAlt className="text-3xl text-diu-green mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">
                Submission Guidelines
              </h2>
            </div>
            <ul className="space-y-3">
              {guidelines.map((guideline, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{guideline}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Dates */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-center mb-6">
              <FaCalendarAlt className="text-3xl text-diu-green mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">
                Important Dates
              </h2>
            </div>
            <div className="space-y-4">
              {importantDates.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-900">{item.event}</span>
                  <span className="text-diu-green font-semibold">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Submission Button */}
          <div className="bg-gradient-to-r from-diu-green to-primary-700 rounded-lg shadow-md p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Submit?
            </h2>
            <p className="mb-6 text-gray-100">
              Submit your research paper through our conference management system
            </p>
            <button className="bg-diu-gold hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors">
              Submit Paper
            </button>
          </div>

          {/* Paper Template */}
          <div className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Paper Template
            </h2>
            <p className="text-gray-700 mb-4">
              Please use the official IEEE conference template for your submission.
            </p>
            <div className="space-y-3">
              <a
                href="#"
                className="block bg-gray-100 hover:bg-gray-200 p-4 rounded-lg transition-colors"
              >
                <span className="font-medium text-diu-green">
                  Download LaTeX Template →
                </span>
              </a>
              <a
                href="#"
                className="block bg-gray-100 hover:bg-gray-200 p-4 rounded-lg transition-colors"
              >
                <span className="font-medium text-diu-green">
                  Download Word Template →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}