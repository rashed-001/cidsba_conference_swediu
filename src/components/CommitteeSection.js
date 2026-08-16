export default function CommitteeSection({ title, members, columns = 2 }) {
  return (
    <div className="mb-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
        <h2 className="text-2xl font-black text-slate-900 md:text-3xl">{title}</h2>
      </div>
      <div className={`grid grid-cols-1 ${columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-5`}>
        {members.map((member, index) => (
          <div key={index} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(13,27,61,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(13,27,61,0.08)]">
            <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
            <p className="mt-2 leading-7 text-slate-600">{member.designation || member.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
}