import { FaUser, FaUsers, FaGraduationCap, FaGlobe } from 'react-icons/fa';

export default function Registration() {
  const categories = [
    {
      icon: <FaGraduationCap className="text-4xl text-diu-green" />,
      title: 'Student (IEEE Member)',
      price: 'TBA',
      features: [
        'Conference Access',
        'Conference Kit',
        'Lunch & Refreshments',
        'Certificate',
      ]
    },
    {
      icon: <FaUser className="text-4xl text-diu-green" />,
      title: 'Regular (IEEE Member)',
      price: 'TBA',
      features: [
        'Conference Access',
        'Conference Kit',
        'Lunch & Refreshments',
        'Certificate',
        'Proceedings',
      ]
    },
    {
      icon: <FaUsers className="text-4xl text-diu-green" />,
      title: 'Regular (Non-IEEE Member)',
      price: 'TBA',
      features: [
        'Conference Access',
        'Conference Kit',
        'Lunch & Refreshments',
        'Certificate',
        'Proceedings',
      ]
    },
    {
      icon: <FaGlobe className="text-4xl text-diu-green" />,
      title: 'International Participant',
      price: 'TBA',
      features: [
        'Conference Access',
        'Conference Kit',
        'Lunch & Refreshments',
        'Certificate',
        'Proceedings',
      ]
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-diu-green">
          Registration
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose your registration category and join us at CIDSBA 2027
        </p>

        {/* Registration Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-diu-green to-primary-700 text-white p-6 text-center">
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-3xl font-bold">{category.price}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L7 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Registration Instructions */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Registration Instructions
            </h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>Select your registration category from the options above</li>
              <li>Complete the online registration form</li>
              <li>Submit payment through the designated payment method</li>
              <li>Upload proof of payment</li>
              <li>Receive confirmation email with registration details</li>
            </ol>
          </div>

          <div className="bg-gradient-to-r from-diu-green to-primary-700 rounded-lg shadow-md p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Register Now
            </h2>
            <p className="mb-6 text-gray-100">
              Secure your spot at CIDSBA 2027
            </p>
            <button className="bg-diu-gold hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors">
              Complete Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}