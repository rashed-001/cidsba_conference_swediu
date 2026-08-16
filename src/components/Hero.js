import Link from 'next/link';
import { FaCalendarAlt, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(29,111,184,0.18),_transparent_35%),linear-gradient(135deg,#061a34_0%,#102d52_34%,#0f5c8b_100%)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(216,177,93,0.22),_transparent_28%)]" />
      <div className="container relative py-16 md:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm font-medium text-cyan-100">
              <span className="rounded-full border border-cyan-200/60 bg-white/10 px-3 py-1.5 backdrop-blur-sm">IEEE Conference</span>
              <span className="rounded-full border border-amber-200/60 bg-amber-500/10 px-3 py-1.5 text-amber-100">2027</span>
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
              IEEE International Conference on Computational Intelligence, Data Science and Business Applications
            </h1>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-cyan-100 md:text-3xl">
              (CIDSBA)
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              A premier global platform for researchers, industry leaders, and academicians to share breakthroughs in AI,
              data science, business intelligence, and emerging computational technologies.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/submission" className="gold-button">
                Submit Your Paper
              </Link>
              <Link href="/registration" className="secondary-button border-white bg-white/10 text-white hover:bg-white/20">
                Register Now
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3 text-cyan-100">
                  <FaCalendarAlt />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">Date</span>
                </div>
                <p className="text-lg font-bold text-white">February 2027</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3 text-cyan-100">
                  <FaMapMarkerAlt />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">Venue</span>
                </div>
                <p className="text-lg font-bold text-white">Dhaka, Bangladesh</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3 text-cyan-100">
                  <FaUniversity />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">Host</span>
                </div>
                <p className="text-lg font-bold text-white">DIU</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-[0_30px_80px_rgba(2,13,29,0.5)] backdrop-blur-md">
              <div className="rounded-[1.75rem] bg-white/95 p-4 text-slate-800 md:p-5">
                <div className="mb-4 flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
                  <div className="flex items-center gap-3">
                    <img src="/images/ieee-logo.png" alt="IEEE" className="h-10 w-10 rounded-full border border-slate-200 bg-white p-1" />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-700">IEEE</div>
                      <div className="text-xs font-semibold text-slate-600">Conference</div>
                    </div>
                  </div>
                  <img src="/images/diu-logo.png" alt="DIU" className="h-10 w-10 rounded-full border border-slate-200 bg-white p-1" />
                </div>

                <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-2">
                  <img src="/images/ConferenceLogo.png" alt="CIDSBA 2027 conference logo" className="mx-auto w-full max-w-[560px] object-contain" />
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[var(--mint)] p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Papers</div>
                    <div className="mt-2 text-3xl font-black text-slate-900">200+</div>
                  </div>
                  <div className="rounded-2xl bg-[var(--gold-soft)] p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Speakers</div>
                    <div className="mt-2 text-3xl font-black text-slate-900">25+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}