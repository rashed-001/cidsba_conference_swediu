import NewsCard from '@/components/NewsCard';
import { newsArticles } from '@/data/news';
import { FaBell } from 'react-icons/fa';

export default function News() {
  return (
    <div className="section bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">News</span>
          <h1 className="section-heading">Latest updates and announcements</h1>
          <p className="section-copy mx-auto">
            Stay informed about key milestones, deadlines, program updates, and conference news from CIDSBA 2027.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl rounded-[2rem] bg-[linear-gradient(135deg,#061a34,#123e72_55%,#0b7ca4)] p-8 text-center text-white shadow-[0_20px_60px_rgba(13,27,61,0.18)] md:p-10">
          <FaBell className="mx-auto mb-4 text-5xl text-amber-300" />
          <h2 className="text-2xl font-black md:text-3xl">Subscribe to updates</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
            Get timely announcements about submission deadlines, registration milestones, and conference highlights.
          </p>
          <div className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="Enter your email" className="w-full rounded-full border border-white/30 bg-white px-4 py-3 text-slate-800 outline-none placeholder:text-slate-400" />
            <button className="gold-button whitespace-nowrap">Subscribe</button>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {newsArticles.map((article) => (
              <NewsCard key={article.id} {...article} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="secondary-button">Load more articles</button>
        </div>
      </div>
    </div>
  );
}