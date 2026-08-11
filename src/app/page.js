import Hero from '@/components/Hero';
import CountdownTimer from '@/components/CountdownTimer';
import NewsCard from '@/components/NewsCard';
import { newsArticles } from '@/data/news';
import { FaCalendar, FaMapMarkerAlt, FaUsers, FaBook, FaBullhorn, FaAward } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: <FaCalendar className="text-4xl text-diu-green" />,
      title: 'Important Dates',
      description: 'Paper submission deadline, notification dates, and conference schedule.',
      link: '/schedule'
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl text-diu-green" />,
      title: 'Venue',
      description: 'Daffodil International University, Dhaka, Bangladesh',
      link: '/contact'
    },
    {
      icon: <FaUsers className="text-4xl text-diu-green" />,
      title: 'Expert Committee',
      description: 'Distinguished researchers and academics from around the world.',
      link: '/committees'
    },
    {
      icon: <FaBook className="text-4xl text-diu-green" />,
      title: 'IEEE Publications',
      description: 'Selected papers will be published in IEEE Conference Proceedings.',
      link: '/submission'
    }
  ];

  const topics = [
    'Computational Intelligence',
    'Machine Learning & Deep Learning',
    'Data Science & Analytics',
    'Business Intelligence',
    'Artificial Intelligence Applications',
    'Big Data Technologies',
    'Cloud Computing',
    'Internet of Things (IoT)',
    'Cyber Security',
    'Blockchain Technology',
    'Natural Language Processing',
    'Computer Vision',
  ];

  const highlights = [
    {
      icon: <FaBullhorn className="text-5xl text-white" />,
      number: "500+",
      label: "Expected Participants"
    },
    {
      icon: <FaBook className="text-5xl text-white" />,
      number: "100+",
      label: "Research Papers"
    },
    {
      icon: <FaUsers className="text-5xl text-white" />,
      number: "15+",
      label: "Countries"
    },
    {
      icon: <FaAward className="text-5xl text-white" />,
      number: "10+",
      label: "Keynote Speakers"
    }
  ];

  // Set a target date for countdown (example: 3 months from now)
  const submissionDeadline = new Date();
  submissionDeadline.setMonth(submissionDeadline.getMonth() + 3);

  return (
    <>
      <Hero />
      
      {/* Countdown Timer */}
      <CountdownTimer targetDate={submissionDeadline.toISOString()} />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link 
                key={index} 
                href={feature.link}
                className="text-center group cursor-pointer"
              >
                <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-diu-green transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-diu-green">
              About CIDSBA 2027
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The IEEE International Conference on Computational Intelligence, Data Science and Business 
              Applications (CIDSBA) is a premier forum for researchers, practitioners, and academicians 
              to present and discuss the most recent innovations, trends, and concerns in the fields of 
              computational intelligence, data science, and their business applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Organized by the Department of Software Engineering at Daffodil International University, 
              CIDSBA aims to bring together leading researchers and industry professionals to exchange 
              and share their experiences and research results on all aspects of computational intelligence 
              and data science.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gradient-to-r from-diu-green to-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Conference Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{item.number}</div>
                <div className="text-lg">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-diu-green">
            Conference Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {topics.map((topic, index) => (
              <div key={index} className="bg-gradient-to-r from-diu-green to-primary-700 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <p className="font-medium">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-diu-green mb-4">
              Latest News & Updates
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed about the latest conference announcements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {newsArticles.slice(0, 3).map((article) => (
              <NewsCard key={article.id} {...article} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/news"
              className="inline-block bg-diu-green hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-diu-green to-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Submit Your Research?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join researchers from around the world in advancing the fields of 
            Computational Intelligence and Data Science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/submission"
              className="inline-block bg-diu-gold hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Submit Your Paper
            </a>
            <a
              href="/registration"
              className="inline-block bg-white hover:bg-gray-100 text-diu-green font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Register Now
            </a>
            <a
              href="/committees"
              className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-diu-green text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View Committees
            </a>
          </div>
        </div>
      </section>
    </>
  );
}