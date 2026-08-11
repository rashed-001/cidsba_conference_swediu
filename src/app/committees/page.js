import CommitteeSection from '@/components/CommitteeSection';
import {
  patronData,
  conferenceChairs,
  conferenceCoChairs,
  organizingChairs,
  organizingCoChairs,
  organizingSecretaries,
  technicalChairs,
  technicalCoChairs,
  technicalSecretaries,
  financeChairs,
  registrationChairs,
  publicityChairs,
  publicationChairs,
  localArrangementChairs
} from '@/data/committees';

export default function Committees() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-diu-green">
          Conference Committees
        </h1>

        {/* Chief Patron */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-diu-green mb-6 border-b-2 border-diu-gold pb-2">
            Chief Patron
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {patronData.chiefPatron.name}
            </h3>
            <p className="text-gray-600">
              {patronData.chiefPatron.designation}
            </p>
          </div>
        </div>

        {/* Patrons */}
        <CommitteeSection 
          title="Patrons" 
          members={patronData.patrons}
          columns={2}
        />

        {/* Conference Chairs */}
        <CommitteeSection 
          title="Conference Chairs" 
          members={conferenceChairs}
          columns={2}
        />

        {/* Conference Co-Chairs */}
        <CommitteeSection 
          title="Conference Co-Chairs" 
          members={conferenceCoChairs}
          columns={2}
        />

        {/* Organizing Committee */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-diu-green mb-6 mt-12">
            Organizing Committee
          </h2>
        </div>

        <CommitteeSection 
          title="Organizing Chairs" 
          members={organizingChairs}
          columns={2}
        />

        <CommitteeSection 
          title="Organizing Co-Chairs" 
          members={organizingCoChairs}
          columns={2}
        />

        <CommitteeSection 
          title="Organizing Secretaries" 
          members={organizingSecretaries}
          columns={2}
        />

        {/* Technical Committee */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-diu-green mb-6 mt-12">
            Technical Committee
          </h2>
        </div>

        <CommitteeSection 
          title="Technical Chairs" 
          members={technicalChairs}
          columns={2}
        />

        <CommitteeSection 
          title="Technical Co-Chairs" 
          members={technicalCoChairs}
          columns={2}
        />

        <CommitteeSection 
          title="Technical Secretaries" 
          members={technicalSecretaries}
          columns={2}
        />

        {/* Other Committees */}
        <CommitteeSection 
          title="Finance Chairs" 
          members={financeChairs}
          columns={2}
        />

        <CommitteeSection 
          title="Registration & Kit Distribution Chairs" 
          members={registrationChairs}
          columns={2}
        />

        <CommitteeSection 
          title="Publicity Chairs" 
          members={publicityChairs}
          columns={2}
        />

        <CommitteeSection 
          title="Publication Chairs" 
          members={publicationChairs}
          columns={2}
        />

        <CommitteeSection 
          title="Local Arrangement Chairs" 
          members={localArrangementChairs}
          columns={2}
        />
      </div>
    </div>
  );
}