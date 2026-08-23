import Hero from '@/components/Hero';
import CountdownTimer from '@/components/CountdownTimer';
import NewsCard from '@/components/NewsCard';
import { newsArticles } from '@/data/news';
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaBook,
  FaBullhorn,
  FaAward,
  FaLightbulb,
  FaRocket,
  FaGlobe,
  FaHandshake,
  FaBrain,
} from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: <FaCalendarAlt className="text-3xl text-sky-700" />,
      title: 'Important Dates',
      description: 'Submission, review, and registration milestones for a clear conference timeline.',
      link: '/schedule',
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-sky-700" />,
      title: 'Venue',
      description: 'A world-class academic setting at Daffodil International University, Dhaka.',
      link: '/contact',
    },
    {
      icon: <FaUsers className="text-3xl text-sky-700" />,
      title: 'Expert Committee',
      description: 'International researchers and professionals shaping the conference agenda.',
      link: '/committees',
    },
    {
      icon: <FaBook className="text-3xl text-sky-700" />,
      title: 'IEEE Proceedings',
      description: 'Selected research papers will be highlighted in IEEE-recognized proceedings.',
      link: '/submission',
    },
  ];

  const stats = [
    { value: '500+', label: 'Expected participants' },
    { value: '100+', label: 'Research papers' },
    { value: '15+', label: 'Countries represented' },
    { value: '10+', label: 'Keynote speakers' },
  ];

  const tracks = [
    {
      title: 'Track 1: Computational Intelligence and Intelligent Systems',
      description:
        'Computational Intelligence, Neural Networks, Fuzzy Systems, UAV Intelligence, Intelligent Agents, Intelligent Systems, Reasoning Systems, Optimization, Multi-Agent Systems.',
    },
    {
      title: 'Track 2: Machine Learning, Deep Learning and Data Science',
      description:
        'Machine Learning, Deep Learning, Reinforcement Learning, Self-Supervised Learning, Federated Learning, Explainable AI, Big Data Analytics, High-Dimensional Data Analysis, Applications in Time-series Forecasting, Reliability Modeling, and Predictive Maintenance for engineered systems.',
    },
    {
      title: 'Track 3: Intelligent Business Data Analytics and Decision Support',
      description:
        'Data Analytics, Business Intelligence, Pattern Recognition, Time-Series Analysis, Anomaly Detection, Recommender Systems, Uncertainty Modeling, Risk Analytics.',
    },
    {
      title: 'Track 4: Intelligent Applications in Health, Bioinformatics and Smart Systems',
      description:
        'Healthcare AI, Bioinformatics, Computational Biology, Smart Healthcare, Internet of Medical Things, Intelligent Transportation, Cyber-Physical Systems, IoT.',
    },
    {
      title: 'Track 5: Emerging Technologies and Responsible Intelligent Computing',
      description:
        'Generative AI, Large Language Models, Quantum Machine Learning, Edge Intelligence, Robotics, Human-Centered AI, Trustworthy AI, Privacy-Preserving Machine Learning, Sustainable AI.',
    },
  ];

  const dates = [
    { label: 'Paper Submission Deadline', value: 'October 2026', accent: 'bg-sky-100 text-sky-700' },
    { label: 'Acceptance Notification', value: 'December 2026', accent: 'bg-amber-100 text-amber-700' },
    { label: 'Final Camera-Ready Submission', value: 'January 2027', accent: 'bg-emerald-100 text-emerald-700' },
    { label: 'Registration Deadline', value: 'January 2027', accent: 'bg-rose-100 text-rose-700' },
    { label: 'Conference Dates', value: '20-21 February 2027', accent: 'bg-violet-100 text-violet-700' },
  ];

  const reasons = [
    {
      icon: <FaBrain className="text-3xl text-sky-700" />,
      title: 'World-Class Research',
      text: 'Present your work to a global audience of scholars, researchers, and innovation leaders.',
    },
    {
      icon: <FaHandshake className="text-3xl text-sky-700" />,
      title: 'Networking & Collaboration',
      text: 'Connect with peers, industry experts, and students across computational and data-driven disciplines.',
    },
    {
      icon: <FaGlobe className="text-3xl text-sky-700" />,
      title: 'International Visibility',
      text: 'Showcase your research in a globally relevant conference environment rooted in IEEE excellence.',
    },
  ];

  const submissionDeadline = new Date();
  submissionDeadline.setMonth(submissionDeadline.getMonth() + 3);

  return (
    <>
      <Hero />
      <CountdownTimer targetDate={new Date('2027-02-20T00:00:00').toISOString()} title="Conference countdown" />

      <section className="section bg-[#fffdf8]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">Why attend</span>
            <h2 className="section-heading">A flagship platform for intelligent innovation</h2>
            <p className="section-copy mx-auto">
              CIDSBA 2027 brings together technology leaders, academics, and emerging researchers to discuss how computational intelligence and data science are redefining modern business and society.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <Link key={index} href={feature.link} className="soft-card group transition hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(13,27,61,0.08)]">
                <div className="feature-icon mb-5 transition group-hover:scale-105">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#f3eee4]">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="section-label">About the conference</span>
              <h2 className="section-heading">Advancing research at the intersection of AI, data science, and business</h2>
              <p className="section-copy">
                The IEEE International Conference on Computational Intelligence, Data Science and Business Applications is designed to foster meaningful exchange among researchers, practitioners, and thought leaders working across intelligent systems, analytics, and digital transformation.
              </p>
              <p className="section-copy mt-4">
                Organized by the Department of Software Engineering at Daffodil International University, the event is devoted to impactful solutions, emerging technologies, and interdisciplinary collaboration that influence real business outcomes.
              </p>
              <div className="mt-8">
                <Link href="/submission" className="primary-button">
                  Explore Submission Guidelines
                </Link>
              </div>
            </div>

            <div className="section-shell overflow-hidden p-4 md:p-6">
              <div className="rounded-[1.75rem] bg-[#3c5147] p-6 text-white">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e4eee2]">Theme</div>
                    <div className="mt-2 text-2xl font-black">Intelligent Growth</div>
                  </div>
                  <FaBullhorn className="text-3xl text-[#e6c78f]" />
                </div>

                <div className="space-y-4">
                  {reasons.map((reason) => (
                    <div key={reason.title} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-xl bg-white/15 p-2 text-white">{reason.icon}</div>
                        <div>
                          <h3 className="text-lg font-bold">{reason.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-200">{reason.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#fffdf8]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">Conference statistics</span>
            <h2 className="section-heading">A growing global stage for innovation</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="soft-card bg-[#3c5147] text-center text-white">
                <div className="text-4xl font-black text-[#e6c78f]">{item.value}</div>
                <div className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-[#d9e1d8]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#f3eee4]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">Key topics</span>
            <h2 className="section-heading">Research areas shaping tomorrow’s digital future</h2>
          </div>

          <div id="tracks" className="mt-12 space-y-5">
            {tracks.map((track, index) => (
              <div key={track.title} className="rounded-[1.5rem] border border-[#e7ddce] bg-[#fffdf8] p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#e4eee2] text-base font-black text-[#3c5147]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 md:text-xl">{track.title}</h3>
                    <p className="mt-2 text-base leading-7 text-slate-600">{track.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#f3eee4]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">Event timeline</span>
            <h2 className="section-heading">Key milestones to mark</h2>
            <p className="section-copy mx-auto">
              Plan your participation around the core dates that shape the conference journey, from submission to the final event experience.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {dates.map((item, index) => (
              <div key={item.label} className="relative overflow-hidden rounded-[1.75rem] border border-[#e7ddce] bg-[#fffdf8] p-5 shadow-[0_18px_40px_rgba(38,53,47,0.05)]">
                <div className="mb-5 flex items-center justify-between">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${item.accent}`}>
                    Phase {index + 1}
                  </span>
                  <FaCalendarAlt className="text-lg text-[#a85c3b]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.label}</h3>
                <p className="mt-4 text-3xl font-black tracking-tight text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#fffdf8]">
        <div className="container">
          <div className="rounded-[2rem] border border-[#3c5147] bg-[#3c5147] p-8 text-white shadow-[0_25px_70px_rgba(38,53,47,0.14)] md:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full border border-[#e4eee2]/40 bg-[#e4eee2]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e4eee2]">
                  Sponsors & partners
                </span>
                <h2 className="mt-4 text-3xl font-black md:text-4xl">Supporting innovation in AI, analytics, and digital transformation</h2>
              </div>
              <Link href="/sponsors" className="gold-button whitespace-nowrap">
                View All Partners
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                'IEEE CIS',
                'AI Task Force',
                'Dept of SWE, DIU',
                'Data Science Lab, Dept of SWE, DIU',
                'Software Engineering Club, Dept of SWE, DIU',
                'SQAT, Dept of SWE, DIU',
              ].map((name) => (
                <div key={name} className="rounded-2xl border border-white/15 bg-white/8 px-4 py-5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-100 backdrop-blur-sm">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#26352f] text-white">
        <div className="container text-center">
          <span className="section-label border-[#e4eee2]/40 bg-[#e4eee2]/10 text-[#e4eee2]">Call for papers</span>
          <h2 className="section-heading mt-6 text-white">Be part of the next wave of computational innovation</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            Submit your latest research in computational intelligence, data science, business intelligence, and AI-driven decision systems to engage with an international academic audience.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/submission" className="gold-button">Submit Paper</Link>
            <Link href="/registration" className="secondary-button border-white bg-white/10 text-white hover:bg-white/20">Register Now</Link>
          </div>
        </div>
      </section>

      <section id="messages" className="section bg-[#e4eee2]">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <span className="section-label">Conference leadership</span>
              <h2 className="section-heading">Messages that set the direction</h2>
            </div>
            <p className="section-copy mt-0">Hear from the people shaping CIDSBA 2027, its research community, and the conversations we hope to carry forward.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {['Chief Guest', 'Chief Patron & Patrons', 'Conference Chairs'].map((title) => (
              <div key={title} className="soft-card border-[#d1dfce]">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#a85c3b]">Message</span>
                <h3 className="mt-4 text-xl font-black text-[#26352f]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6e746b]">The welcome message and conference perspective will be published here.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="section bg-[#fffdf8]">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div>
            <span className="section-label">Co-located events</span>
            <h2 className="section-heading">Workshops, tutorials, and new ideas</h2>
            <p className="section-copy">Meet the community beyond the paper session through focused workshops, tutorials, and partner-led events.</p>
            <Link href="/contact#events" className="primary-button mt-7">Propose an Event</Link>
          </div>
          <div className="rounded-[2rem] bg-[#26352f] p-8 text-[#fffdf8]">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e6c78f]">While you are here</span>
            <h3 className="mt-4 text-2xl font-black">Discover Savar and Dhaka</h3>
            <p className="mt-4 leading-8 text-[#d9e1d8]">Plan time for local history, riverfront walks, Bengali cuisine, and the cultural energy surrounding Daffodil Smart City.</p>
            <Link href="#local-attraction" className="mt-6 inline-flex font-bold text-[#e6c78f]">Explore places to visit →</Link>
          </div>
        </div>
      </section>

      <section id="local-attraction" className="section bg-[#f3eee4]">
        <div className="container">
          <div>
            <span className="section-label">Local attraction</span>
            <h2 className="section-heading">History, culture, and campus life</h2>
            <p className="section-copy">Make the most of your visit with a few memorable places around Dhaka and the Daffodil Smart City campus.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'Lalbagh Fort',
                detail: 'A Mughal-era fort complex in Old Dhaka.',
                image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lalbagh%20Fort.jpg?width=800',
              },
              {
                name: 'Ahsan Manzil',
                detail: 'The historic Pink Palace beside the Buriganga River.',
                image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlFQPbKOhodZIdFLjX0laEWsa7kO6hBUHxA8ZNS48WKo-E_O8nriFg-_3s2VBYhvNeiUPbp7e3S1XaXej0--EqNcIr-Z3zGzFLgdUDGWVJMLXw0tGSa6VRDSZQMygoqX-IO-rKy=s680-w680-h510-rw',
              },
              {
                name: 'National Parliament',
                detail: 'Louis Kahn\'s landmark of modern architecture.',
                image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jatiya%20Sangsad%20Bhaban.jpg?width=800',
              },
              {
                name: 'Daffodil Smart City',
                detail: 'The green, connected campus hosting CIDSBA 2027.',
                image: 'https://daffodilvarsity.edu.bd/images/hero.jpg',
              },
            ].map((place) => (
              <article key={place.name} className="overflow-hidden rounded-2xl border border-[#e7ddce] bg-[#fffdf8] shadow-sm">
                <img src={place.image} alt={place.name} className="aspect-[4/3] w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-black text-[#26352f]">{place.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6e746b]">{place.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="announcement" className="section bg-[#f3e4c9]">
        <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="section-label">Conference materials</span>
            <h2 className="section-heading">More information will be announced soon</h2>
            <p className="section-copy">Proceedings, final program details, and additional conference resources will appear here as they are confirmed.</p>
          </div>
          <Link href="/downloads" className="secondary-button whitespace-nowrap">Visit Downloads</Link>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">Latest updates</span>
            <h2 className="section-heading">News and announcements</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {newsArticles.slice(0, 3).map((article) => (
              <NewsCard key={article.id} {...article} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/news" className="primary-button">
              View All News
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}