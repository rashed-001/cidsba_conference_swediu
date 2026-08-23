import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa';

// NOTE: Placeholder content — replace with the final awards details.
export default function Awards() {
  const awardCategories = [
    {
      icon: <FaTrophy className="text-4xl text-amber-500" />,
      title: 'Best Paper Award',
      description: 'Awarded to the paper judged most outstanding in originality, technical quality, and clarity.',
    },
    {
      icon: <FaMedal className="text-4xl text-sky-600" />,
      title: 'Best Student Paper Award',
      description: 'Recognizes an outstanding paper with a student as the primary author.',
    },
    {
      icon: <FaAward className="text-4xl text-[#3c5147]" />,
      title: 'Best Presentation Award',
      description: 'Given to the presenter who best communicates their research to the audience.',
    },
    {
      icon: <FaStar className="text-4xl text-[#a85c3b]" />,
      title: 'Best Reviewer Award',
      description: 'Honors a reviewer for exceptional, timely, and constructive review contributions.',
    },
  ];

  const criteria = [
    'Originality and novelty of the contribution.',
    'Technical soundness and depth of analysis.',
    'Clarity of writing and presentation.',
    'Relevance to the conference tracks and themes.',
  ];

  const timeline = [
    { event: 'Award Nomination Opens', date: 'TBA' },
    { event: 'Award Nomination Deadline', date: 'TBA' },
    { event: 'Award Announcement', date: 'TBA' },
    { event: 'Award Ceremony', date: 'TBA' },
  ];

  return (
    <div className="section bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">Recognition</span>
          <h1 className="section-heading">Conference awards</h1>
          <p className="section-copy mx-auto">
            Placeholder page — this content will be replaced with the final awards information for CIDSBA 2027.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            {awardCategories.map((award) => (
              <div key={award.title} className="soft-card p-8 md:p-10">
                <div className="mb-4">{award.icon}</div>
                <h2 className="text-xl font-bold text-slate-900">{award.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{award.description}</p>
              </div>
            ))}
          </div>

          <div className="soft-card p-8 md:p-10">
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">Evaluation criteria</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Placeholder text — the final scoring criteria and weighting for each award will be published here.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {criteria.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                  <FaStar className="mt-1 text-amber-500" />
                  <span className="leading-7 text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-card p-8 md:p-10">
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">Award timeline</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {timeline.map((item) => (
                <div key={item.event} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{item.event}</div>
                  <div className="mt-3 text-2xl font-black text-slate-900">{item.date}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#061a34,#123e72_55%,#0b7ca4)] p-8 text-center text-white shadow-[0_20px_60px_rgba(13,27,61,0.18)] md:p-10">
            <h2 className="text-2xl font-black md:text-3xl">Award details coming soon</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
              Placeholder text — full nomination and selection process will be announced closer to the conference dates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
