import TimelineItem from '@/components/TimelineItem';
import { scheduleDay1, scheduleDay2 } from '@/data/schedule';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Schedule() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-diu-green">
          Conference Schedule
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Detailed program schedule for CIDSBA 2027

        {/* Conference Info */}
        <div className="max-w-4xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="text-3xl text-diu-green mr-4" />
              <div>
                <h3 className="text-lg font-bold text-gray-900">Date</h3>
                <p className="text-gray-600">February 2027</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-3xl text-diu-green mr-4" />
              <div>
                <h3 className="text-lg font-bold text-gray-900">Venue</h3>
                <p className="text-gray-600">Daffodil International University, Dhaka</p>
              </div>
            </div>
          </div>
        </div>

        {/* Day 1 Schedule */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-diu-green to-primary-700 text-white rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold">Day 1 - Conference Day</h2>
            <p className="text-gray-100 mt-2">Keynote speeches and technical sessions</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            {scheduleDay1.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Day 2 Schedule */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-700 to-diu-green text-white rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold">Day 2 - Conference Day</h2>
            <p className="text-gray-100 mt-2">Technical sessions and closing ceremony</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            {scheduleDay2.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Download Schedule */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Download Full Schedule
            </h3>
            <p className="text-gray-600 mb-6">
              Get the complete conference program in PDF format
            </p>
            <button className="bg-diu-green hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Download PDF Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}