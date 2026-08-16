import { FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';

export default function SpeakerCard({ name, title, institution, bio, image, linkedin, email, website }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(13,27,61,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(13,27,61,0.12)]">
      <div className="flex aspect-square items-center justify-center bg-[linear-gradient(135deg,#0d1b3d,#1d6fb8_52%,#0b7ca4)] text-white">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="text-5xl font-black tracking-tight">{name.split(' ').map((n) => n[0]).join('').slice(0, 2)}</div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black text-slate-900">{name}</h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-sky-700">{title}</p>
        <p className="mt-3 text-sm leading-6 text-slate-600">{institution}</p>
        <p className="mt-4 text-sm leading-7 text-slate-600">{bio}</p>
        <div className="mt-5 flex items-center gap-3">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-100 p-2 text-slate-700 transition hover:bg-sky-100 hover:text-sky-700">
              <FaLinkedin size={16} />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} className="rounded-full bg-slate-100 p-2 text-slate-700 transition hover:bg-sky-100 hover:text-sky-700">
              <FaEnvelope size={16} />
            </a>
          )}
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-100 p-2 text-slate-700 transition hover:bg-sky-100 hover:text-sky-700">
              <FaGlobe size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}