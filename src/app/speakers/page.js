import SpeakerCard from '@/components/SpeakerCard';
import { keynoteSpeakers, invitedSpeakers } from '@/data/speakers';

export default function Speakers() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-diu-green">
          Conference Speakers
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Distinguished speakers from leading institutions worldwide
        </p>

        {/* Keynote Speakers */}
        <div className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Keynote Speakers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keynoteSpeakers.map((speaker) => (
                <SpeakerCard key={speaker.id} {...speaker} />
              ))}
            </div>
          </div>
        </div>

        {/* Invited Speakers */}
        <div>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Invited Speakers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {invitedSpeakers.map((speaker) => (
                <SpeakerCard key={speaker.id} {...speaker} />
              ))}
            </div>
          </div>
        </div>

        {/* Call for Speakers */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-diu-green to-primary-700 rounded-lg shadow-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Interested in Speaking?
            </h2>
            <p className="mb-6 text-gray-100">
              We welcome proposals from experts who would like to share their insights
            </p>
            <a
              href="/contact"
              className="inline-block bg-diu-gold hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}