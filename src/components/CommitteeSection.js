import { FaGlobeAmericas, FaBuilding, FaUserGraduate } from 'react-icons/fa';

const countryFlags = {
  France: '🇫🇷',
  Denmark: '🇩🇰',
  Japan: '🇯🇵',
  Portugal: '🇵🇹',
  China: '🇨🇳',
  Malaysia: '🇲🇾',
  Thailand: '🇹🇭',
  USA: '🇺🇸',
  Australia: '🇦🇺',
  Bangladesh: '🇧🇩'
};

export default function CommitteeSection({ id, title, subtitle, members, columns = 2, highlight = false }) {
  if (!members || members.length === 0) return null;

  const getGridCols = (cols) => {
    switch (cols) {
      case 1:
        return 'grid-cols-1';
      case 3:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 2:
      default:
        return 'grid-cols-1 md:grid-cols-2';
    }
  };

  return (
    <section id={id} className="mb-14 scroll-mt-24">
      <div className="flex items-center space-x-3 mb-2">
        <h2 className="text-2xl md:text-3xl font-bold text-diu-green">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-gray-600 text-sm mb-4">{subtitle}</p>
      )}
      <div className="h-1 w-20 bg-diu-gold rounded mb-6"></div>

      <div className={`grid ${getGridCols(columns)} gap-6`}>
        {members.map((member, index) => {
          const countryFlag = member.country ? countryFlags[member.country] || '🌐' : null;
          const initials = member.name
            .replace(/^(Dr\.|Prof\.|Mr\.|Ms\.|Mrs\.)\s+/i, '')
            .split(' ')
            .filter(Boolean)
            .map(n => n[0])
            .slice(0, 2)
            .join('')
            .toUpperCase();

          return (
            <div
              key={index}
              className={`group bg-white p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${
                highlight 
                  ? 'border-diu-gold/40 shadow-md bg-gradient-to-br from-white to-amber-50/20' 
                  : 'border-gray-100 shadow-sm hover:border-diu-green/30'
              }`}
            >
              <div className="flex items-start space-x-4">
                {/* Avatar Badge */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-diu-green/10 text-diu-green font-bold flex items-center justify-center text-base group-hover:bg-diu-green group-hover:text-white transition-colors duration-300">
                  {initials || <FaUserGraduate />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-diu-green transition-colors leading-snug">
                      {member.name}
                    </h3>
                    {countryFlag && (
                      <span
                        className="text-xs px-2.5 py-1 rounded-full bg-gray-100 font-medium text-gray-700 flex items-center space-x-1 border border-gray-200"
                        title={member.country}
                      >
                        <span>{countryFlag}</span>
                        <span className="hidden sm:inline text-[11px]">{member.country}</span>
                      </span>
                    )}
                  </div>

                  {member.designation && (
                    <p className="text-xs font-semibold text-diu-gold uppercase tracking-wider mb-1">
                      {member.designation}
                    </p>
                  )}

                  <div className="flex items-start space-x-1.5 text-gray-600 text-sm mt-1">
                    <FaBuilding className="w-3.5 h-3.5 text-gray-400 mt-1 flex-shrink-0" />
                    <span className="leading-tight">{member.institution || member.affiliation}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}