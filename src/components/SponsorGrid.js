export default function SponsorGrid({ sponsors, tier }) {
  const tierStyles = {
    platinum: 'md:col-span-12 lg:col-span-12',
    gold: 'md:col-span-6 lg:col-span-6',
    silver: 'md:col-span-4 lg:col-span-4',
    bronze: 'md:col-span-3 lg:col-span-3',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {sponsors.map((sponsor, index) => (
        <div 
          key={index} 
          className={`${tierStyles[tier]} bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 flex items-center justify-center`}
        >
          {sponsor.logo ? (
            <img 
              src={sponsor.logo} 
              alt={sponsor.name} 
              className="max-w-full max-h-32 object-contain"
            />
          ) : (
            <div className="text-2xl font-bold text-gray-400">
              {sponsor.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}