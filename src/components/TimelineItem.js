export default function TimelineItem({ time, title, description, speaker, location, type }) {
  const typeColors = {
    keynote: 'bg-purple-100 text-purple-800 border-purple-300',
    session: 'bg-blue-100 text-blue-800 border-blue-300',
    break: 'bg-green-100 text-green-800 border-green-300',
    workshop: 'bg-orange-100 text-orange-800 border-orange-300',
  };

  return (
    <div className="flex gap-6 pb-8 last:pb-0">
      <div className="flex flex-col items-center">
        <div className="bg-diu-green text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg">
          {time.split(':')[0]}
        </div>
        <div className="w-0.5 bg-gray-300 flex-grow mt-2"></div>
      </div>
      <div className="flex-grow pb-8">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="text-sm text-gray-500 mb-1">{time}</div>
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${typeColors[type] || typeColors.session}`}>
              {type}
            </span>
          </div>
          {description && (
            <p className="text-gray-600 mb-3">{description}</p>
          )}
          {speaker && (
            <div className="text-sm">
              <span className="text-gray-500">Speaker:</span>
              <span className="text-diu-green font-semibold ml-2">{speaker}</span>
            </div>
          )}
          {location && (
            <div className="text-sm text-gray-500 mt-1">
              📍 {location}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}