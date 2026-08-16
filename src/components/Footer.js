import Link from 'next/link';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="container py-14">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Stay connected</div>
              <h3 className="mt-2 text-2xl font-black text-white">Join the conversation</h3>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/registration" className="gold-button">Register now</Link>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
                <FaLinkedin size={16} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
                <FaFacebookF size={16} />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
                <FaTwitter size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
                <FaYoutube size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/images/ConferenceLogo.png" alt="CIDSBA 2027 logo" className="h-12 w-auto max-w-[220px] object-contain" />
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              International Conference on Computational Intelligence, Data Science and Business Applications, hosted by Daffodil International University.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li><Link href="/committees" className="hover:text-white">Committees</Link></li>
              <li><Link href="/schedule" className="hover:text-white">Schedule</Link></li>
              <li><Link href="/submission" className="hover:text-white">Submission</Link></li>
              <li><Link href="/registration" className="hover:text-white">Registration</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-amber-300" />
                <span>Daffodil International University, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-amber-300" />
                <span>info@cidsba.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-amber-300" />
                <span>+880 1700-000000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          © 2026 CIDSBA Conference. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
