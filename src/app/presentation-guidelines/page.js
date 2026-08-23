import { FaFileAlt, FaMicrophone, FaVideo, FaImage, FaDownload } from 'react-icons/fa';

// NOTE: Placeholder content — replace with final presentation guidelines.
export default function PresentationGuidelines() {
  const oralGuidelines = [
    'TBA minutes for presentation plus TBA minutes for questions.',
    'Use a 16:9 slide format with readable text.',
    'Include motivation, method, results, and conclusion.',
    'Submit the final slide deck before your session.',
  ];

  const virtualGuidelines = [
    'Use a stable internet connection and test your microphone.',
    'Join the virtual room TBA minutes before the session.',
    'Keep your camera on when presenting, where possible.',
    'Platform details will be shared with registered authors.',
  ];

  const posterGuidelines = [
    'Poster size: TBA.',
    'Prepare a concise summary of your work for viewers.',
    'Bring a printed copy and arrive TBA minutes before the session.',
    'Be available at your poster during the assigned session slot.',
  ];

  return (
    <div className="section bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">For accepted authors</span>
          <h1 className="section-heading">Presentation guidelines</h1>
          <p className="section-copy mx-auto">
            Placeholder page — this content is a draft and will be replaced with the final presentation
            guidelines for CIDSBA 2027.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl space-y-8">
          <div className="soft-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="feature-icon h-12 w-12 bg-sky-100 text-sky-700">
                <FaMicrophone />
              </div>
              <h2 className="text-2xl font-black text-slate-900 md:text-3xl">Oral presentation</h2>
            </div>
            <ul className="grid gap-3 md:grid-cols-2">
              {oralGuidelines.map((item) => (
                <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 leading-7 text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="soft-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="feature-icon h-12 w-12 bg-amber-100 text-amber-700">
                <FaVideo />
              </div>
              <h2 className="text-2xl font-black text-slate-900 md:text-3xl">Virtual presentation</h2>
            </div>
            <ul className="grid gap-3 md:grid-cols-2">
              {virtualGuidelines.map((item) => (
                <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 leading-7 text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="soft-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="feature-icon h-12 w-12 bg-[#e4eee2] text-[#3c5147]">
                <FaImage />
              </div>
              <h2 className="text-2xl font-black text-slate-900 md:text-3xl">Poster presentation</h2>
            </div>
            <ul className="grid gap-3 md:grid-cols-2">
              {posterGuidelines.map((item) => (
                <li key={item} className="rounded-2xl border border-[#e7ddce] bg-[#f3eee4] p-4 leading-7 text-[#5f685f]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="soft-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="feature-icon h-12 w-12 bg-[#f3e4c9] text-[#a85c3b]">
                <FaFileAlt />
              </div>
              <h2 className="text-2xl font-black text-slate-900 md:text-3xl">Presentation template</h2>
            </div>
            <p className="leading-7 text-slate-600">
              Placeholder text — the official slide template will be linked here once finalized.
            </p>
            <a href="#" className="mt-6 flex max-w-md items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:border-sky-200 hover:bg-sky-50">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">PPTX</div>
                <div className="mt-2 text-lg font-bold text-slate-900">Download slide template</div>
              </div>
              <FaDownload className="text-xl text-sky-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
