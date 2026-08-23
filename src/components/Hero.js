import Link from 'next/link';
import { FaCalendarAlt, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#e7ddce] bg-[#f8f3e9]">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-[#e4eee2] opacity-70" />
      <div className="container relative py-14 md:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm font-bold text-[#8d4f35]">
              <span className="rounded-full border border-[#d9c9b3] bg-[#fffdf8] px-3 py-1.5">IEEE Conference</span>
              <span className="rounded-full border border-[#d9c9b3] bg-[#f3e4c9] px-3 py-1.5">20-21 February 2027</span>
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-[#26352f] md:text-5xl lg:text-6xl">
              IEEE International Conference on Computational Intelligence, Data Science and Business Applications
            </h1>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-[#a85c3b] md:text-3xl">
              (CIDSBA)
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f685f] md:text-lg">
              A premier global platform for researchers, industry leaders, and academicians to share breakthroughs in AI,
              data science, business intelligence, and emerging computational technologies.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/submission" className="gold-button">
                Submit Paper
              </Link>
              <Link href="/registration" className="secondary-button">
                Register Now
              </Link>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-[#e7ddce] bg-[#fffdf8] p-4 shadow-sm">
                <div className="mb-3 flex items-center gap-3 text-[#a85c3b]">
                  <FaCalendarAlt />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">Date</span>
                </div>
                <p className="text-lg font-bold text-[#26352f]">February 2027</p>
              </div>
              <div className="rounded-2xl border border-[#e7ddce] bg-[#fffdf8] p-4 shadow-sm">
                <div className="mb-3 flex items-center gap-3 text-[#a85c3b]">
                  <FaMapMarkerAlt />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">Venue</span>
                </div>
                <p className="text-lg font-bold text-[#26352f]">Daffodil Smart City</p>
              </div>
              <div className="rounded-2xl border border-[#e7ddce] bg-[#fffdf8] p-4 shadow-sm">
                <div className="mb-3 flex items-center gap-3 text-[#a85c3b]">
                  <FaUniversity />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">Host</span>
                </div>
                <p className="text-lg font-bold text-[#26352f]">Daffodil International University</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-[#d9c9b3] bg-[#fffdf8] p-5 shadow-[0_30px_80px_rgba(38,53,47,0.14)]">
              <div className="rounded-[1.75rem] bg-[#f3e4c9] p-4 text-[#26352f] md:p-5">
                <div className="mb-4 flex items-center justify-between gap-4 rounded-2xl border border-[#e7ddce] bg-[#fffdf8] px-3 py-2">
                  <div className="flex items-center gap-3">
                    <img src="/images/ieee-logo.png" alt="IEEE" className="h-10 w-10 rounded-full border border-[#e7ddce] bg-white p-1" />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a85c3b]">IEEE</div>
                      <div className="text-xs font-semibold text-[#6e746b]">Conference</div>
                    </div>
                  </div>
                  <img src="/images/diu-logo.png" alt="DIU" className="h-10 w-10 rounded-full border border-[#e7ddce] bg-white p-1" />
                </div>

                <div className="overflow-hidden rounded-[1.5rem] border border-[#e7ddce] bg-[#fffdf8] p-2">
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