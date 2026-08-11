import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-diu-green">
          Contact Us
        </h1>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-2xl text-diu-green mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Department of Software Engineering<br />
                      Daffodil International University<br />
                      Daffodil Smart City, Birulia<br />
                      Dhaka-1216, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaEnvelope className="text-2xl text-diu-green mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">cidsba@diu.edu.bd</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaPhone className="text-2xl text-diu-green mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+880-2-55028693</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaGlobe className="text-2xl text-diu-green mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Website</h3>
                    <p className="text-gray-600">www.daffodilvarsity.edu.bd</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-diu-green focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-diu-green focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-diu-green focus:border-transparent"
                    placeholder="Message subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-diu-green focus:border-transparent"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-diu-green hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map or Additional Info */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Conference Organizing Team
            </h2>
            <p className="text-gray-700 mb-4">
              For specific inquiries, please contact the respective committee chairs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-4 border-diu-green pl-4">
                <h3 className="font-semibold text-gray-900">General Inquiries</h3>
                <p className="text-gray-600">Organizing Secretaries</p>
              </div>
              <div className="border-l-4 border-diu-green pl-4">
                <h3 className="font-semibold text-gray-900">Technical Issues</h3>
                <p className="text-gray-600">Technical Committee</p>
              </div>
              <div className="border-l-4 border-diu-green pl-4">
                <h3 className="font-semibold text-gray-900">Registration</h3>
                <p className="text-gray-600">Registration Chairs</p>
              </div>
              <div className="border-l-4 border-diu-green pl-4">
                <h3 className="font-semibold text-gray-900">Publications</h3>
                <p className="text-gray-600">Publication Chair</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}