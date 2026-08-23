import CommitteeSection from '@/components/CommitteeSection';
import {
  patronData,
  internationalAdvisoryCommittee,
  nationalAdvisoryCommittee,
  conferenceChairs,
  conferenceCoChairs,
  organizingChairs,
  organizingCoChairs,
  organizingSecretaries,
  technicalChairs,
  technicalCoChairs,
  technicalSecretaries,
  trackChairs,
  financeChairs,
  registrationChairs,
  publicityChairs,
  publicationChairs,
  localArrangementChairs,
  webAndITChairs,
} from '@/data/committees';

export default function Committees() {
  return (
    <div className="section bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">Leadership</span>
          <h1 className="section-heading">Conference committees</h1>
          <p className="section-copy mx-auto">
            Meet the distinguished team steering CIDSBA 2027 through academic excellence, technical rigor, and organizing leadership.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl space-y-10">
          <div className="soft-card p-8 md:p-10">
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">Chief patron</h2>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-slate-900">{patronData.chiefPatron.name}</h3>
              <p className="mt-2 text-slate-600">{patronData.chiefPatron.designation}</p>
            </div>
          </div>

          <CommitteeSection title="Patrons" members={patronData.patrons} columns={2} />

          <CommitteeSection title="International advisory committee" members={internationalAdvisoryCommittee} columns={2} />
          <CommitteeSection title="National advisory committee" members={nationalAdvisoryCommittee} columns={2} />

          <CommitteeSection title="Conference chairs" members={conferenceChairs} columns={2} />
          <CommitteeSection title="Conference co-chairs" members={conferenceCoChairs} columns={2} />

          <div className="soft-card p-8 md:p-10">
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">Organizing committee</h2>
          </div>
          <CommitteeSection title="Organizing chairs" members={organizingChairs} columns={2} />
          <CommitteeSection title="Organizing co-chairs" members={organizingCoChairs} columns={2} />
          <CommitteeSection title="Organizing secretaries" members={organizingSecretaries} columns={2} />

          <div className="soft-card p-8 md:p-10">
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">Technical committee</h2>
          </div>
          <CommitteeSection title="Technical chairs" members={technicalChairs} columns={2} />
          <CommitteeSection title="Technical co-chairs" members={technicalCoChairs} columns={2} />
          <CommitteeSection title="Technical secretaries" members={technicalSecretaries} columns={2} />
          <CommitteeSection title="Track chairs" members={trackChairs} columns={2} />

          <CommitteeSection title="Finance chairs" members={financeChairs} columns={2} />
          <CommitteeSection title="Registration & kit distribution chairs" members={registrationChairs} columns={2} />
          <CommitteeSection title="Publicity chairs" members={publicityChairs} columns={2} />
          <CommitteeSection title="Publication chairs" members={publicationChairs} columns={2} />
          <CommitteeSection title="Local arrangement chairs" members={localArrangementChairs} columns={2} />
          <CommitteeSection title="Web and IT support chairs" members={webAndITChairs} columns={2} />
        </div>
      </div>
    </div>
  );
}
