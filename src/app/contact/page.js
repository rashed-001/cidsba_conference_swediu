import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="section bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">Contact</span>
          <h1 className="section-heading">Get in touch with the organizing team</h1>
          <p className="section-copy mx-auto">
            We welcome your questions about participation, submissions, partnerships, and conference logistics.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl grid gap-8 lg:grid-cols-2">
          <div className="soft-card p-8 md:p-10">
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">Contact information</h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="feature-icon h-12 w-12 bg-sky-100 text-sky-700">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Address</h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Department of Software Engineering<br />
                    Daffodil International University<br />
                    Daffodil Smart City, Birulia<br />
                    Dhaka-1216, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="feature-icon h-12 w-12 bg-sky-100 text-sky-700">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Email</h3>
                  <p className="mt-2 leading-7 text-slate-600">cidsba@diu.edu.bd</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="feature-icon h-12 w-12 bg-sky-100 text-sky-700">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Phone</h3>
                  <p className="mt-2 leading-7 text-slate-600">+880-2-55028693</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="feature-icon h-12 w-12 bg-sky-100 text-sky-700">
                  <FaGlobe />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Website</h3>
                  <p className="mt-2 leading-7 text-slate-600">www.daffodilvarsity.edu.bd</p>
                </div>
              </div>
            </div>
          </div>

          <div className="soft-card p-8 md:p-10">
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">Send a message</h2>
            <form className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">Name</label>
                <input type="text" id="name" placeholder="Your name" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
                <input type="email" id="email" placeholder="your@email.com" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white" />
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-slate-700">Subject</label>
                <input type="text" id="subject" placeholder="Message subject" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
                <textarea id="message" rows="4" placeholder="Tell us how we can help" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white"></textarea>
              </div>
              <button type="submit" className="primary-button w-full justify-center">
                <FaPaperPlane className="mr-2" /> Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl rounded-[2rem] bg-white p-8 shadow-[0_18px_50px_rgba(13,27,61,0.06)] md:p-10">
          <h2 className="text-2xl font-black text-slate-900 md:text-3xl">Conference organizing team</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border-l-4 border-sky-500 bg-slate-50 p-4">
              <h3 className="text-lg font-bold text-slate-900">General inquiries</h3>
              <p className="mt-2 text-slate-600">Organizing Secretaries</p>
            </div>
            <div className="rounded-2xl border-l-4 border-sky-500 bg-slate-50 p-4">
              <h3 className="text-lg font-bold text-slate-900">Technical issues</h3>
              <p className="mt-2 text-slate-600">Technical Committee</p>
            </div>
            <div className="rounded-2xl border-l-4 border-sky-500 bg-slate-50 p-4">
              <h3 className="text-lg font-bold text-slate-900">Registration</h3>
              <p className="mt-2 text-slate-600">Registration Chairs</p>
            </div>
            <div className="rounded-2xl border-l-4 border-sky-500 bg-slate-50 p-4">
              <h3 className="text-lg font-bold text-slate-900">Publications</h3>
              <p className="mt-2 text-slate-600">Publication Chair</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}