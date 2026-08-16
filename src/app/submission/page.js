import { FaFileAlt, FaCheckCircle, FaCalendarAlt, FaDownload, FaArrowRight } from 'react-icons/fa';

export default function Submission() {
  const guidelines = [
    'Papers must be original, technically sound, and not previously published or under review elsewhere.',
    'Maximum manuscript length is 6 pages in the IEEE conference format.',
    'Submissions must be written in English and follow the official IEEE style guidelines.',
    'Authors should use the conference template and include complete author/speaker affiliations.',
    'All papers must be submitted via the official conference management platform.',
    'Each manuscript will undergo a double-blind peer review process.',
  ];

  const importantDates = [
    { event: 'Announcement Date', date: 'June 2026' },
    { event: 'Paper Submission Deadline', date: 'October 2026' },
    { event: 'Acceptance Notification', date: 'December 2026' },
    { event: 'Camera-Ready Submission', date: 'January 2027' },
    { event: 'Early Bird Registration', date: 'January 2027' },
    { event: 'Conference Dates', date: 'February 2027' },
  ];

  return (
    <div className="section bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">Call for papers</span>
          <h1 className="section-heading">Submit your research to CIDSBA 2027</h1>
          <p className="section-copy mx-auto">
            Share your original work in computational intelligence, data science, and business applications with a global network of scholars and practitioners.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl space-y-8">
          <div className="soft-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="feature-icon h-12 w-12 bg-sky-100 text-sky-700">
                <FaFileAlt />
              </div>
              <h2 className="text-2xl font-black text-slate-900 md:text-3xl">Submission guidelines</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {guidelines.map((guideline, index) => (
                <div key={index} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <FaCheckCircle className="mt-1 text-green-600" />
                  <span className="leading-7 text-slate-700">{guideline}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="feature-icon h-12 w-12 bg-amber-100 text-amber-700">
                <FaCalendarAlt />
              </div>
              <h2 className="text-2xl font-black text-slate-900 md:text-3xl">Important dates</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {importantDates.map((item) => (
                <div key={item.event} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{item.event}</div>
                  <div className="mt-3 text-2xl font-black text-slate-900">{item.date}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#061a34,#123e72_55%,#0b7ca4)] p-8 text-center text-white shadow-[0_20px_60px_rgba(13,27,61,0.18)] md:p-10">
            <h2 className="text-2xl font-black md:text-3xl">Ready to submit your work?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
              Join global researchers and innovators by submitting a high-quality paper that advances the frontiers of computational intelligence and data-driven business transformation.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="gold-button">Submit Paper</button>
              <button className="secondary-button border-white bg-white/10 text-white hover:bg-white/20">Download Template</button>
            </div>
          </div>

          <div className="soft-card p-8 md:p-10">
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">Paper templates</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Please use the official IEEE manuscript template to ensure full compatibility with review and publication requirements.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <a href="#" className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:border-sky-200 hover:bg-sky-50">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">LaTeX</div>
                  <div className="mt-2 text-lg font-bold text-slate-900">Download LaTeX template</div>
                </div>
                <FaDownload className="text-xl text-sky-700" />
              </a>
              <a href="#" className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:border-sky-200 hover:bg-sky-50">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Word</div>
                  <div className="mt-2 text-lg font-bold text-slate-900">Download Word template</div>
                </div>
                <FaArrowRight className="text-xl text-sky-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}