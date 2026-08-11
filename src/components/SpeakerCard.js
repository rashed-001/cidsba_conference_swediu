import { FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';

export default function SpeakerCard({ name, title, institution, bio, image, linkedin, email, website }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      <div className="aspect-square bg-gradient-to-br from-diu-green to-primary-700 flex items-center justify-center">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-6xl font-bold text-white">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-diu-green font-semibold mb-2">{title}</p>
        <p className="text-gray-600 text-sm mb-4">{institution}</p>
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{bio}</p>
        <div className="flex space-x-3">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-diu-green">
              <FaLinkedin size={20} />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} className="text-gray-600 hover:text-diu-green">
              <FaEnvelope size={20} />
            </a>
          )}
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-diu-green">
              <FaGlobe size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}