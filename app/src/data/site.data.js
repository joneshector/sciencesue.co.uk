/**
 * site.data.js (app copy)
 * ---------------------------------------------------------------------------
 * Mirrors /assets/js/data/site.data.js from the static site, with one
 * difference: asset paths are root-absolute ("/images/…") so they resolve
 * on any route under React Router. Keep both files in sync when content
 * changes (see docs/CONTENT.md).
 */

export const site = {
  name: 'Science Sue',
  tagline: 'Educational Excellence',
  domain: 'https://www.sciencesue.co.uk',
  email: 'sue@sciencesue.co.uk',
  phone: '+44 (0) 123 456 7890',
};

/** Primary navigation — order defines header/footer link order. */
export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
];

/** "My Educational Approach" cards (exactly 3 — do not add or remove). */
export const approachCards = [
  { icon: '🔬', title: 'Curriculum Design' },
  { icon: '📚', title: 'Leadership and Management' },
  { icon: '🎯', title: 'Ofsted Preparedness' },
];

/** Services offered (exactly 4 — mirrors the contact form subjects). */
export const services = [
  'Individual Tutoring',
  'Group Sessions',
  'Exam Preparation',
  'Online Learning',
];

/** Contact page info items (exactly 4 — do not add or remove). */
export const contactInfo = [
  { icon: '📧', title: 'Email', lines: ['sue@sciencesue.co.uk'] },
  { icon: '📱', title: 'Phone', lines: ['+44 (0) 123 456 7890'] },
  {
    icon: '🕒',
    title: 'Hours',
    lines: [
      'Monday - Friday: 9:00 AM - 6:00 PM',
      'Saturday: 10:00 AM - 4:00 PM',
      'Sunday: Closed',
    ],
  },
  {
    icon: '🎓',
    title: 'Services',
    lines: ['Individual Tutoring', 'Group Sessions', 'Exam Preparation', 'Online Learning'],
  },
];

/** "Meet Sue" gallery (exactly 16 images — do not add or remove). */
export const galleryImages = Array.from({ length: 16 }, (_, i) => ({
  src: `/images/sue_image_${i + 1}.jpeg`,
  alt: 'Science Sue educational moment',
}));
