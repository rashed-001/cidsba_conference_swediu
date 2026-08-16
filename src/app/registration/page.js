import { FaUser, FaUsers, FaGraduationCap, FaGlobe, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function Registration() {
  const categories = [
    {
      icon: <FaGraduationCap className="text-4xl text-sky-700" />,
      title: 'Student (IEEE Member)',
      price: 'TBA',
      features: ['Conference access', 'Conference kit', 'Lunch & refreshments', 'Certificate'],
    },
    {
      icon: <FaUser className="text-4xl text-sky-700" />,
      title: 'Regular (IEEE Member)',
      price: 'TBA',
      features: ['Conference access', 'Conference kit', 'Lunch & refreshments', 'Certificate', 'Proceedings'],
    },
    {
      icon: <FaUsers className="text-4xl text-sky-700" />,
      title: 'Regular (Non-IEEE Member)',
      price: 'TBA',
      features: ['Conference access', 'Conference kit', 'Lunch & refreshments', 'Certificate', 'Proceedings'],
    },
    {
      icon: <FaGlobe className="text-4xl text-sky-700" />,
      title: 'International Participant',
      price: 'TBA',
      features: ['Conference access', 'Conference kit', 'Lunch & refreshments', 'Certificate', 'Proceedings'],
    },
  ];

  const steps = [
    'Select the registration category that matches your participation.',
    'Complete the online registration form with your academic and contact details.',
    'Submit the payment using the official registration channel.',
    'Upload your proof of payment and receive confirmation by email.',
  ];

  return (
    <div className="section bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">Registration</span>
          <h1 className="section-heading">Reserve your place at CIDSBA 2027</h1>
          <p className="section-copy mx-auto">
            Choose the registration option that suits your role and join a distinguished community of researchers, professionals, and students.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.title} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(13,27,61,0.08)]">
              <div className="bg-[linear-gradient(135deg,#0d1b3d,#1d6fb8)] p-6 text-center text-white">
                <div className="mb-4 flex justify-center">{category.icon}</div>
                <h3 className="text-lg font-bold">{category.title}</h3>
                <div className="mt-3 text-3xl font-black text-amber-300">{category.price}</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-sm text-slate-700">
                  {category.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(13,27,61,0.06)] md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="section-label">How to register</span>
              <h2 className="section-heading mt-4">Simple, secure, and fast</h2>
              <p className="section-copy mt-4">
                Complete your registration in a few steps and receive confirmation for your attendance at the conference.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sm font-black text-sky-700">{index + 1}</div>
                  <p className="leading-7 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] bg-[linear-gradient(135deg,#061a34,#123e72_55%,#0b7ca4)] p-8 text-center text-white shadow-[0_20px_60px_rgba(13,27,61,0.18)] md:p-10">
          <h2 className="text-2xl font-black md:text-3xl">Register now to secure your seat</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
            Be part of a highly engaging conference experience featuring keynote lectures, research discussion, and international collaboration.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="gold-button">
              Complete Registration <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}