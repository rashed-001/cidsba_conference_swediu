export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-diu-green to-primary-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            IEEE CIDSBA 2027
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-100">
            International Conference on Computational Intelligence,
          </p>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Data Science and Business Applications
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Announcement: June 2026 • Conference: February 2027
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <p className="text-lg mb-2">Organized by</p>
            <p className="text-2xl font-bold">Department of Software Engineering</p>
            <p className="text-xl">Daffodil International University</p>
            <p className="text-lg mt-2">Bangladesh</p>
          </div>
          <div className="mt-8 space-x-4">
            <a
              href="/submission"
              className="inline-block bg-diu-gold hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Submit Paper
            </a>
            <a
              href="/registration"
              className="inline-block bg-white hover:bg-gray-100 text-diu-green font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}