import { FaFilePdf, FaFileWord, FaFileArchive, FaDownload } from 'react-icons/fa';

export default function Downloads() {
  const downloads = [
    {
      category: "Paper Templates",
      items: [
        {
          name: "IEEE Conference Paper Template (LaTeX)",
          description: "Official IEEE LaTeX template for paper submission",
          icon: <FaFileArchive className="text-4xl text-red-600" />,
          size: "2.5 MB",
          link: "#"
        },
        {
          name: "IEEE Conference Paper Template (Word)",
          description: "Official IEEE Word template for paper submission",
          icon: <FaFileWord className="text-4xl text-blue-600" />,
          size: "156 KB",
          link: "#"
        },
        {
          name: "Sample Paper",
          description: "Example of properly formatted conference paper",
          icon: <FaFilePdf className="text-4xl text-red-600" />,
          size: "324 KB",
          link: "#"
        }
      ]
    },
    {
      category: "Guidelines",
      items: [
        {
          name: "Author Guidelines",
          description: "Complete guidelines for paper preparation and submission",
          icon: <FaFilePdf className="text-4xl text-red-600" />,
          size: "450 KB",
          link: "#"
        },
        {
          name: "Presentation Guidelines",
          description: "Guidelines for preparing your conference presentation",
          icon: <FaFilePdf className="text-4xl text-red-600" />,
          size: "280 KB",
          link: "#"
        },
        {
          name: "Camera-Ready Submission Guide",
          description: "Instructions for final paper submission",
          icon: <FaFilePdf className="text-4xl text-red-600" />,
          size: "195 KB",
          link: "#"
        }
      ]
    },
    {
      category: "Conference Materials",
      items: [
        {
          name: "Call for Papers",
          description: "Official call for papers document",
          icon: <FaFilePdf className="text-4xl text-red-600" />,
          size: "385 KB",
          link: "#"
        },
        {
          name: "Conference Brochure",
          description: "Detailed conference information brochure",
          icon: <FaFilePdf className="text-4xl text-red-600" />,
          size: "2.8 MB",
          link: "#"
        },
        {
          name: "Sponsorship Prospectus",
          description: "Information for potential sponsors",
          icon: <FaFilePdf className="text-4xl text-red-600" />,
          size: "1.2 MB",
          link: "#"
        },
        {
          name: "Conference Schedule",
          description: "Detailed program schedule",
          icon: <FaFilePdf className="text-4xl text-red-600" />,
          size: "420 KB",
          link: "#"
        }
      ]
    },
    {
      category: "Presentation Templates",
      items: [
        {
          name: "PowerPoint Template",
          description: "Official presentation template for speakers",
          icon: <FaFileArchive className="text-4xl text-orange-600" />,
          size: "1.5 MB",
          link: "#"
        },
        {
          name: "Poster Template",
          description: "Template for poster presentations",
          icon: <FaFilePdf className="text-4xl text-red-600" />,
          size: "850 KB",
          link: "#"
        }
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-diu-green">
          Downloads
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Access all conference templates, guidelines, and materials
        </p>

        <div className="max-w-5xl mx-auto">
          {downloads.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-diu-gold">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            Size: {item.size}
                          </span>
                          <a
                            href={item.link}
                            className="inline-flex items-center bg-diu-green hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
                          >
                            <FaDownload className="mr-2" />
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help?
            </h3>
            <p className="text-gray-600 mb-6">
              If you have any questions about the templates or submission process, please don't hesitate to contact us.
            </p>
            <a
              href="/contact"
              className="inline-block bg-diu-green hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}