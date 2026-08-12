# Project Summary & Specifications (SUMMARY.md)

## 📌 Executive Summary

The **IEEE International Conference on Computational Intelligence, Data Science and Business Applications (CIDSBA)** website is a modern, responsive web application built to serve as the official digital gateway for conference attendees, researchers, authors, committee members, and sponsors. Organized by the **Department of Software Engineering, Daffodil International University**, the portal facilitates paper submissions, attendee registration, schedule navigation, speaker engagement, and news distribution.

---

## 🛠️ Technical Stack & Dependencies

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | Next.js 14.0.4 | App Router architecture (`src/app`), Server Components & Client Hooks |
| **UI Library** | React 18.2.0 | Functional components with React Hooks |
| **Styling** | Tailwind CSS 3.4.0 | Utility-first CSS with PostCSS 8 & Autoprefixer 10 |
| **Iconography** | React Icons 4.12.0 | Feather, FontAwesome, and Heroicons sets |
| **Language** | JavaScript (ES6+) | JS Configured (`jsconfig.json`) |
| **Deployment Platform** | Vercel | Zero-config edge hosting & instant CI/CD deployment |

---

## 🌐 Application Architecture & Pages

The application utilizes Next.js 14 App Router with clear separation of routing, reusable components, and content data layer.

### 1. Page Routes (`src/app/`)

- **`/` (Homepage)**: `page.js`
  - Hero banner with conference call to action
  - Live interactive Countdown Timer (`CountdownTimer.js`)
  - Key conference tracks & call for papers highlights
  - Keynote speakers preview carousel (`SpeakerCard.js`)
  - News & announcements preview (`NewsCard.js`)
  - Sponsor grid display (`SponsorGrid.js`)
- **`/committees`**: Displays General Chairs, International Advisory Committee, National Advisory Committee, Technical Program Committee (TPC), Steering Committee, and Sub-Committees parsed from `src/data/committees.json` with sticky section navigation and country flag badges.
- **`/submission`**: Guidelines for paper formatting, submission deadlines, IEEE Xplore compliance details, camera-ready submission links.
- **`/registration`**: Transparent breakdown of registration fees (IEEE Member, Non-Member, Student, Foreign Delegate), payment methods, and registration portals.
- **`/schedule`**: Comprehensive interactive schedule with filterable timeline items (`TimelineItem.js`), keynote slots, parallel technical sessions, and break schedules.
- **`/speakers`**: Full profiles of Keynote Speakers and Invited Speakers featuring photos, affiliations, talk titles, and bios.
- **`/news`**: Complete history of conference announcements, call for paper releases, and deadline updates.
- **`/gallery`**: Photo gallery showcasing past conference events, campus highlights, and networking sessions.
- **`/sponsors`**: Categorized sponsor grid (Technical Sponsor IEEE, Platinum, Gold, Academic Partners).
- **`/faq`**: Accordion-based FAQ page answering common queries regarding submission, registration, travel, and publication.
- **`/downloads`**: Download center for IEEE manuscript templates (Docx/LaTeX), CFP brochures, and presentation slides.
- **`/contact`**: Interactive contact form, department contact details, location map, and venue directions.

---

## 🧩 Reusable UI Components (`src/components/`)

- **`Header.js`**: Sticky navigation bar with responsive mobile menu toggle, brand logo, and active link highlighting.
- **`Footer.js`**: Comprehensive footer with quick links, social media channels, copyright notice, and organizer accreditation.
- **`Hero.js`**: Visual hero section with background styling, main headline, date, venue, and primary CTA buttons.
- **`CountdownTimer.js`**: Real-time JavaScript countdown clock targeting submission deadlines.
- **`CommitteeSection.js`**: Standard IEEE committee section renderer with initials badge, country flag badges, hover animations, and flexible grid layouts.
- **`SpeakerCard.js`**: Profile card for keynote speakers with avatar, title, organization, and bio modal/details.
- **`NewsCard.js`**: Card component for news posts with date badge, title, excerpt, and read more action.
- **`SponsorGrid.js`**: Grid renderer for sponsor logos categorized by sponsorship tier.
- **`TimelineItem.js`**: Schedule item block representing session timing, speaker, location, and topic.

---

## 📊 Data Layer (`src/data/`)

Content management is decoupled from UI layout using modular JSON and JavaScript data files:

- **`committees.json` & `committees.js`**: Centralized JSON dataset for Chief Patron, Patrons, International Advisory Committee, National Advisory Committee, Conference Chairs, Organizing Committee, Technical Committee, and specialized sub-committees.
- **`speakers.js`**: Keynote and invited speaker details, images, topics.
- **`schedule.js`**: Multi-day agenda timeline with time slots and track information.
- **`news.js`**: List of announcement items with publish dates and details.
- **`sponsors.js`**: Sponsor organization metadata, logos, tier levels.
- **`faq.js`**: Categorized list of questions and answers.

---

## 🌟 Key Features Summary

1. **Fully Responsive Design**: Optimized for mobile, tablet, laptop, and desktop viewports using Tailwind CSS breakpoints.
2. **Centralized JSON Data Architecture**: Committee structures and conference content can be updated directly in `src/data/committees.json`.
3. **Live Countdown Clock**: Client-side countdown timer driving author engagement for paper submission deadlines.
4. **Search Engine Optimized**: Pre-configured meta tags, semantic HTML5 structure, and Next.js built-in SEO capabilities.
5. **Fast Load Times**: Next.js App Router server rendering ensuring rapid initial page load performance.

---

## 🔒 Security & Code Quality

- **ESLint**: Strict linting rules configured via `eslint-config-next`.
- **Clean Code Standard**: Component-driven development with modular styles and minimal side effects.
- **Environment Isolation**: Configured for safe production deployment on Vercel without hardcoded sensitive keys.

---

## 📅 Version Control & Maintenance

- **Version**: `1.1.0`
- **Maintainer**: Department of Software Engineering, Daffodil International University
- **License**: Private / IEEE Conference Authorized Use
