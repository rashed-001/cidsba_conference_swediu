export default function CommitteeSection({ title, members, columns = 2 }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-diu-green mb-6 border-b-2 border-diu-gold pb-2">
        {title}
      </h2>
      <div className={`grid grid-cols-1 ${columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-6`}>
        {members.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {member.name}
            </h3>
            <p className="text-gray-600 text-sm">
              {member.designation || member.institution}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}