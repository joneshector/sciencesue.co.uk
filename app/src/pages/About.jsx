/**
 * About page — profile card, philosophy, approach list, CTA.
 * Copy is client-approved content; do not reword (see docs/CONTENT.md).
 */
import PageHeader from '../components/PageHeader.jsx';
import CtaPanel from '../components/CtaPanel.jsx';

export default function About() {
  return (
    <>
      <PageHeader
        title="About Science Sue"
        lede="Dedicated to inspiring scientific curiosity and academic excellence through personalized education and professional expertise."
      />

      <section className="section" aria-label="Sue's profile and philosophy">
        <div className="container about-grid">
          <div className="profile-card">
            <img src="/images/sue_image_1.jpeg" alt="Sue Dudman Jones — Science Sue" width="1200" height="1600" />
            <div className="profile-card__body">
              <h2>Sue Dudman Jones</h2>
              <p className="profile-card__title">Primary Education Specialist</p>
              <p className="profile-card__credentials">35+ Years Educational Leadership Experience</p>
            </div>
          </div>

          <div className="about-text">
            <h2>My Educational Philosophy</h2>
            <p>
              I believe that every student has the potential to excel in education when provided
              with the right guidance, support, and learning environment. My approach combines
              rigorous academic standards with engaging, practical methods that make complex
              scientific concepts accessible and enjoyable.
            </p>
            <p>
              With over 35 years of experience in science education, I have had the privilege
              of helping hundreds of students discover their passion for learning
              and achieve their academic goals.
            </p>

            <h3>My Approach</h3>
            <ul className="approach-list">
              <li>
                <strong>Personalized Learning:</strong> Every student learns differently.
                I adapt my teaching methods to match individual learning styles and pace.
              </li>
              <li>
                <strong>Practical Application:</strong> Education comes alive when students
                can see real-world applications and conduct hands-on experiments.
              </li>
              <li>
                <strong>Building Confidence:</strong> I focus on building students'
                confidence through positive reinforcement and achievable goals.
              </li>
              <li>
                <strong>Critical Thinking:</strong> Beyond memorization, I encourage
                students to question, analyze, and think critically about educational concepts.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CtaPanel
        title="Ready to Start Your Scientific Journey?"
        body="Let's work together to unlock your potential in science. Contact me today to discuss your educational goals and how I can help you achieve them."
        buttonText="Get In Touch"
      />
    </>
  );
}
