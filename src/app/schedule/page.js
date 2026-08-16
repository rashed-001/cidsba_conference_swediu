import TimelineItem from '@/components/TimelineItem';
import { scheduleDay1, scheduleDay2 } from '@/data/schedule';
import { FaCalendarAlt, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';

export default function Schedule() {
  return (
    <div className="section bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">Program</span>
          <h1 className="section-heading">Conference schedule</h1>
          <p className="section-copy mx-auto">
            A two-day program designed to bring together keynote insights, technical sessions, networking, and collaborative exchange.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl grid gap-6 md:grid-cols-2">
          <div className="soft-card flex items-center gap-4">
            <div className="feature-icon h-12 w-12 bg-sky-100 text-sky-700">
              <FaCalendarAlt />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Date</div>
              <div className="mt-2 text-xl font-black text-slate-900">February 2027</div>
            </div>
          </div>
          <div className="soft-card flex items-center gap-4">
            <div className="feature-icon h-12 w-12 bg-amber-100 text-amber-700">
              <FaMapMarkerAlt />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Venue</div>
              <div className="mt-2 text-xl font-black text-slate-900">Daffodil International University, Dhaka</div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="mb-6 rounded-[1.5rem] bg-[linear-gradient(135deg,#0d1b3d,#1d6fb8)] p-6 text-white">
            <h2 className="text-2xl font-black md:text-3xl">Day 1 — Research and keynote sessions</h2>
            <p className="mt-2 text-slate-200">Opening keynote, invited talks, and structured technical paper sessions.</p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(13,27,61,0.05)]">
            {scheduleDay1.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="mb-6 rounded-[1.5rem] bg-[linear-gradient(135deg,#0a7ca4,#0f5c8b)] p-6 text-white">
            <h2 className="text-2xl font-black md:text-3xl">Day 2 — Industry and innovation forum</h2>
            <p className="mt-2 text-slate-200">Panel discussions, applications, and closing ceremony.</p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(13,27,61,0.05)]">
            {scheduleDay2.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] bg-white p-8 text-center shadow-[0_18px_50px_rgba(13,27,61,0.06)] md:p-10">
          <h3 className="text-2xl font-black text-slate-900 md:text-3xl">Download the full schedule</h3>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Access the complete conference agenda in PDF format for planning your participation.
          </p>
          <button className="gold-button mt-8">
            <FaDownload className="mr-2" /> Download PDF Schedule
          </button>
        </div>
      </div>
    </div>
  );
}