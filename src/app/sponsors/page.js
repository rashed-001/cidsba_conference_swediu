import SponsorGrid from '@/components/SponsorGrid';
import { platinumSponsors, goldSponsors, silverSponsors, bronzeSponsors } from '@/data/sponsors';
import { FaCrown, FaStar, FaMedal, FaTrophy } from 'react-icons/fa';

export default function Sponsors() {
  return (
    <div className="section bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">Partners</span>
          <h1 className="section-heading">Our sponsors and supporters</h1>
          <p className="section-copy mx-auto">
            We are grateful to the organizations and partners that help power this international research and innovation platform.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl space-y-14">
          <div>
            <div className="mb-8 flex items-center justify-center gap-3">
              <FaCrown className="text-3xl text-slate-600" />
              <h2 className="text-3xl font-black text-slate-900">Platinum sponsors</h2>
            </div>
            <SponsorGrid sponsors={platinumSponsors} tier="platinum" />
          </div>

          <div>
            <div className="mb-8 flex items-center justify-center gap-3">
              <FaTrophy className="text-3xl text-amber-500" />
              <h2 className="text-3xl font-black text-slate-900">Gold sponsors</h2>
            </div>
            <SponsorGrid sponsors={goldSponsors} tier="gold" />
          </div>

          <div>
            <div className="mb-8 flex items-center justify-center gap-3">
              <FaMedal className="text-3xl text-slate-500" />
              <h2 className="text-3xl font-black text-slate-900">Silver sponsors</h2>
            </div>
            <SponsorGrid sponsors={silverSponsors} tier="silver" />
          </div>

          <div>
            <div className="mb-8 flex items-center justify-center gap-3">
              <FaStar className="text-3xl text-orange-500" />
              <h2 className="text-3xl font-black text-slate-900">Bronze sponsors</h2>
            </div>
            <SponsorGrid sponsors={bronzeSponsors} tier="bronze" />
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl rounded-[2rem] bg-[linear-gradient(135deg,#061a34,#123e72_55%,#0b7ca4)] p-8 text-center text-white shadow-[0_20px_60px_rgba(13,27,61,0.18)] md:p-12">
          <h2 className="text-3xl font-black">Become a sponsor</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
            Partner with a leading academic and industry conference to build visibility, opportunities, and innovation-focused engagement.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
              <h3 className="text-lg font-bold">Brand visibility</h3>
              <p className="mt-2 text-sm leading-6 text-slate-200">Reach researchers, professionals, and decision-makers from across the region and beyond.</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
              <h3 className="text-lg font-bold">Networking</h3>
              <p className="mt-2 text-sm leading-6 text-slate-200">Connect with leaders in AI, analytics, and digital transformation through extended engagement.</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
              <h3 className="text-lg font-bold">Recognition</h3>
              <p className="mt-2 text-sm leading-6 text-slate-200">Gain visibility across conference materials, promotion, and event participation.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/contact" className="gold-button">Contact us</a>
            <button className="secondary-button border-white bg-white/10 text-white hover:bg-white/20">Download prospectus</button>
          </div>
        </div>
      </div>
    </div>
  );
}