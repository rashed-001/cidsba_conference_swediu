'use client';

import { useState } from 'react';
import CommitteeSection from '@/components/CommitteeSection';
import committeesData from '@/data/committees.json';
import { FaGlobeAmericas, FaFlag, FaCrown, FaUserTie, FaCogs, FaTools, FaLayerGroup } from 'react-icons/fa';

export default function Committees() {
  const [activeTab, setActiveTab] = useState('all');

  const {
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
    financeChairs,
    registrationChairs,
    publicityChairs,
    publicationChairs,
    localArrangementChairs
  } = committeesData;

  const navItems = [
    { id: 'all', label: 'All Committees', icon: FaLayerGroup },
    { id: 'patrons', label: 'Chief Patron & Patrons', icon: FaCrown },
    { id: 'international', label: `International Advisory (${internationalAdvisoryCommittee.length})`, icon: FaGlobeAmericas },
    { id: 'national', label: `National Advisory (${nationalAdvisoryCommittee.length})`, icon: FaFlag },
    { id: 'chairs', label: 'Conference Chairs', icon: FaUserTie },
    { id: 'organizing', label: 'Organizing Committee', icon: FaCogs },
    { id: 'technical', label: 'Technical Committee', icon: FaTools },
  ];

  const scrollToSection = (id) => {
    setActiveTab(id);
    if (id === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12">
      {/* Header Banner */}
      <div className="bg-diu-green text-white py-12 px-4 mb-10 rounded-2xl container mx-auto shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 opacity-10 pointer-events-none">
          <FaGlobeAmericas size={300} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block bg-diu-gold/20 text-diu-gold text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-3 border border-diu-gold/30">
            IEEE CIDSBA 2026 Leadership
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Conference Committees
          </h1>
          <p className="text-gray-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Distinguished academicians, researchers, and industry experts guiding the IEEE International Conference on Computational Intelligence, Data Science and Business Applications.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sticky Filter / Navigation Bar */}
        <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-md border border-gray-100 mb-12 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === item.id
                      ? 'bg-diu-green text-white shadow-sm'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-diu-green'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. Chief Patron & Patrons */}
        <div id="patrons" className="scroll-mt-36">
          {/* Chief Patron */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-diu-green mb-2 flex items-center space-x-2">
              <FaCrown className="text-diu-gold w-6 h-6" />
              <span>Chief Patron</span>
            </h2>
            <div className="h-1 w-20 bg-diu-gold rounded mb-6"></div>
            <div className="bg-gradient-to-r from-diu-green to-emerald-800 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden border border-diu-gold/30">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-diu-gold font-semibold">
                    Conference Chief Patron
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-1">
                    {patronData.chiefPatron.name}
                  </h3>
                  <p className="text-emerald-100 text-base mt-2 font-medium">
                    {patronData.chiefPatron.designation || patronData.chiefPatron.institution}
                  </p>
                </div>
                <div className="flex-shrink-0 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20">
                  <span className="text-xs text-emerald-200 block uppercase font-medium">Organization</span>
                  <span className="text-sm font-semibold">Daffodil International University</span>
                </div>
              </div>
            </div>
          </div>

          {/* Patrons */}
          <CommitteeSection
            title="Patrons"
            members={patronData.patrons}
            columns={2}
            highlight={true}
          />
        </div>

        {/* 2. International Advisory Committee */}
        <CommitteeSection
          id="international"
          title="International Advisory Committee"
          subtitle="Renowned global scholars advising on technical scope, review standards, and international collaboration."
          members={internationalAdvisoryCommittee}
          columns={2}
          highlight={true}
        />

        {/* 3. National Advisory Committee */}
        <CommitteeSection
          id="national"
          title="National Advisory Committee"
          subtitle="Eminent academic leaders from top universities across Bangladesh driving national research excellence."
          members={nationalAdvisoryCommittee}
          columns={2}
        />

        {/* 4. Conference Chairs */}
        <div id="chairs" className="scroll-mt-36">
          <CommitteeSection
            title="General Chairs"
            members={conferenceChairs}
            columns={2}
            highlight={true}
          />

          <CommitteeSection
            title="Conference Co-Chairs"
            members={conferenceCoChairs}
            columns={2}
          />
        </div>

        {/* 5. Organizing Committee */}
        <div id="organizing" className="scroll-mt-36 pt-4">
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-gray-900 border-b-2 border-diu-green pb-3">
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
        </div>

        {/* 6. Technical Program Committee */}
        <div id="technical" className="scroll-mt-36 pt-4">
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-gray-900 border-b-2 border-diu-green pb-3">
              Technical Program Committee
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
        </div>

        {/* 7. Sub-Committees */}
        <div className="pt-6">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 border-b-2 border-diu-green pb-3">
              Specialized Sub-Committees
            </h2>
          </div>

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
    </div>
  );
}