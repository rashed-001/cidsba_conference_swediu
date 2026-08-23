// All entries below are sourced from the official CIDSBA committee list PDF.
// The PDF is treated as ground truth for names, titles, and affiliations.
// Empty { name: "", institution: "" } rows are placeholders for committees
// where the PDF has not yet listed names — fill them in once confirmed.

export const patronData = {
  chiefPatron: {
    name: "Dr. Md. Sabur Khan",
    designation: "Chairman, BoT, Daffodil International University, Bangladesh"
  },
  patrons: [
    {
      name: "Professor Dr. M. R. Kabir",
      designation: "Vice Chancellor, Daffodil International University, Bangladesh"
    },
    {
      name: "Professor Dr. Mohammad Masum Iqbal",
      designation: "Pro Vice Chancellor, Daffodil International University, Bangladesh"
    }
  ]
};

// New section — PDF table currently has no names listed.
export const internationalAdvisoryCommittee = [
  { name: "", institution: "" },
  { name: "", institution: "" },
  { name: "", institution: "" },
  { name: "", institution: "" },
  { name: "", institution: "" },
  { name: "", institution: "" }
];

// New section — PDF table currently has no names listed.
export const nationalAdvisoryCommittee = [
  { name: "", institution: "" },
  { name: "", institution: "" },
  { name: "", institution: "" },
  { name: "", institution: "" },
  { name: "", institution: "" },
  { name: "", institution: "" }
];

export const conferenceChairs = [
  {
    name: "Professor Dr. Imran Mahmud",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Professor Dr. Muhammad Firoz Mridha",
    institution: "American International University-Bangladesh (AIUB), Bangladesh"
  },
  {
    // "Outside" row in the PDF — no name given yet.
    name: "",
    institution: ""
  }
];

export const conferenceCoChairs = [
  {
    name: "Professor Dr. Md. Fokhray Hossain",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Prof. Dr. Bimal Chandra Das",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Dr. Mohammed Nadir Bin Ali",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];

export const organizingChairs = [
  {
    name: "Dr. S M Hasan Mahmud",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Dr. Kamrul Islam Shahin",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Afsana Begum",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];

export const organizingCoChairs = [
  {
    name: "Dr. Md. Abdul Kader",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Dr. Shabnom Mustary",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];

export const organizingSecretaries = [
  {
    name: "Professor Dr. A. H. M. Saifullah Sadi",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Dr. Md. Fazla Elahe",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Dr. Mohammad Manzurul Islam",
    institution: "Research Activity Coordinator, IEEE CIS BDC, East West University (EWU)"
  }
];

export const technicalChairs = [
  {
    name: "Dr. Rubaiyat Islam",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Dr. Nusrat Jahan",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Dr. Md. Rajibul Islam",
    institution: "Educational Activity Coordinator, IEEE CIS BDC | Bangladesh University of Business and Technology (BUBT)"
  }
];

export const technicalCoChairs = [
  {
    name: "Dr. Ms. Shahina Haque",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Dr. Mohammad Kamal Hossain Foraji",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Dr. Md. Shafikul Islam",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];

export const technicalSecretaries = [
  {
    name: "Dr. Marzia Ahmed",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Mr. Uttam Kumar Dey",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Md. Ashek -Al- Aziz",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];

// New section — PDF table lists institution ("Daffodil International
// University (DIU), Bangladesh") for each row but no names yet.
export const trackChairs = [
  { name: "", institution: "" },
  { name: "", institution: "" },
  { name: "", institution: "" },
  { name: "", institution: "" },
  { name: "", institution: "" },
  { name: "", institution: "" }
];

export const financeChairs = [
  {
    name: "Mr. A.H.M Shahariar Parvez",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Mr. Mahbubul Alam",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Mr. Md. Mozammelul Haque",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];

export const registrationChairs = [
  {
    name: "Mr. Md. Khaled Sohel",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Mr. K. M. Shahriar Islam",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Mr. Fazla Rabby Raihan",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];

export const publicityChairs = [
  {
    name: "Professor Dr. Mohammad Mobarak Hossain",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Mr. Md. Shohel Arman",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Ms. Syeda Sumaia Sultana",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Ms. Shahrin Islam",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];

export const publicationChairs = [
  {
    name: "Dr. Sultan Mahmud",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Md Mohsin Kabir",
    institution: "Mälardalens University, Sweden"
  },
  {
    // "Outside" row in the PDF — no name given yet.
    name: "",
    institution: ""
  }
];

export const localArrangementChairs = [
  {
    name: "Mr. Khalid Been Badruzzaman Biplob",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Mr. Md. Suhag Ali",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];

// "Web and IT Support Chairs" in the PDF — this is the single source for
// the website's "Web & IT chairs" section (they are the same committee).
export const webAndITChairs = [
  {
    name: "Mr. Md. Rashedul Alam",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Mr. Rahat Uddin Azad",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Mr. Izaz Ahmmed Tuhin",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];
