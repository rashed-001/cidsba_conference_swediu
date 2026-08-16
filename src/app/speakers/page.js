import SpeakerCard from '@/components/SpeakerCard';
import { keynoteSpeakers, invitedSpeakers } from '@/data/speakers';

export default function Speakers() {
  return (
    <div className="section bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">Featured speakers</span>
          <h1 className="section-heading">Meet our distinguished speakers</h1>
          <p className="section-copy mx-auto">
            CIDSBA 2027 brings together influential researchers, academics, and industry leaders to share ideas shaping the future of intelligence and data-driven innovation.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl space-y-14">
          <div>
            <h2 className="text-center text-3xl font-black text-slate-900 md:text-4xl">Keynote speakers</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {keynoteSpeakers.map((speaker) => (
                <SpeakerCard key={speaker.id} {...speaker} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-center text-3xl font-black text-slate-900 md:text-4xl">Invited speakers</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {invitedSpeakers.map((speaker) => (
                <SpeakerCard key={speaker.id} {...speaker} />
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] bg-[linear-gradient(135deg,#061a34,#123e72_55%,#0b7ca4)] p-8 text-center text-white shadow-[0_20px_60px_rgba(13,27,61,0.18)] md:p-10">
          <h2 className="text-2xl font-black md:text-3xl">Interested in speaking at the conference?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
            We welcome experts and researchers who would like to contribute a keynote, invited talk, or panel session.
          </p>
          <a href="/contact" className="gold-button mt-8">Contact us</a>
        </div>
      </div>
    </div>
  );
}