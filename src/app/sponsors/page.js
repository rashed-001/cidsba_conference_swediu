import SponsorGrid from '@/components/SponsorGrid';
import { platinumSponsors, goldSponsors, silverSponsors, bronzeSponsors } from '@/data/sponsors';
import { FaCrown, FaStar, FaMedal, FaTrophy } from 'react-icons/fa';

export default function Sponsors() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-diu-green">
          Our Sponsors
        </h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          We gratefully acknowledge the support of our sponsors who make this conference possible
        </p>

        {/* Platinum Sponsors */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-8">
            <FaCrown className="text-4xl text-gray-400 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Platinum Sponsors</h2>
          </div>
          <SponsorGrid sponsors={platinumSponsors} tier="platinum" />
        </div>

        {/* Gold Sponsors */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-8">
            <FaTrophy className="text-4xl text-yellow-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Gold Sponsors</h2>
          </div>
          <SponsorGrid sponsors={goldSponsors} tier="gold" />
        </div>

        {/* Silver Sponsors */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-8">
            <FaMedal className="text-4xl text-gray-400 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Silver Sponsors</h2>
          </div>
          <SponsorGrid sponsors={silverSponsors} tier="silver" />
        </div>

        {/* Bronze Sponsors */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-8">
            <FaStar className="text-4xl text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Bronze Sponsors</h2>
          </div>
          <SponsorGrid sponsors={bronzeSponsors} tier="bronze" />
        </div>

        {/* Become a Sponsor */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-diu-green to-primary-700 rounded-lg shadow-xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Become a Sponsor
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Partner with us to reach a global audience of researchers, academics, and industry professionals
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Brand Visibility</h3>
                <p className="text-gray-100 text-sm">
                  Showcase your brand to international attendees
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Networking</h3>
                <p className="text-gray-100 text-sm">
                  Connect with leading researchers and professionals
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Recognition</h3>
                <p className="text-gray-100 text-sm">
                  Recognition in all conference materials
                </p>
              </div>
            </div>

            <div className="space-x-4">
              <a
                href="/contact"
                className="inline-block bg-diu-gold hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Contact Us
              </a>
              <button className="inline-block bg-white hover:bg-gray-100 text-diu-green font-bold py-3 px-8 rounded-lg transition-colors">
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}