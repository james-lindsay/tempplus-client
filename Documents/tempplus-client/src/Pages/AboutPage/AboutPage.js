import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about-us">
      <h1 className="about-us__title">About Us</h1>

      <section className="about-us__section">
        <h2 className="about-us__section-title">Welcome to TempPlus</h2>
        <p className="about-us__section-text">
          At TempPlus, we understand the unique challenges of the construction
          industry and recognize the importance of connecting skilled workers
          with rewarding temporary job opportunities. Our platform is designed
          to simplify the job search process for both employers and job seekers
          in the construction sector.
        </p>
      </section>

      <section className="about-us__section">
        <h2 className="about-us__section-title">Our Mission</h2>
        <p className="about-us__section-text">
          Our mission is to bridge the gap between construction companies in
          need of skilled, temporary workers and individuals seeking fulfilling
          opportunities in the construction field. We strive to create a
          seamless and efficient platform that facilitates meaningful
          connections, contributing to the growth and success of both employers
          and workers.
        </p>
      </section>

      <section className="about-us__section">
        <h2 className="about-us__section-title">Why Choose TempPlus?</h2>
        <ul className="about-us__list">
          <li className="about-us__list-item">
            <strong className="about-us__list-item-title">
              Specialized Focus:
            </strong>{" "}
            We specialize in construction jobs, ensuring that our platform
            caters specifically to the needs of the industry. Whether you're a
            seasoned professional or a newcomer to the field, you'll find
            relevant and exciting opportunities with us.
          </li>
        </ul>
      </section>

      <section className="about-us__section">
        <h2 className="about-us__section-title">Contact Us</h2>
        <p className="about-us__section-text">
          Have questions or need assistance? We're here to help. Contact our
          support team at{" "}
          <a href="mailto:support@email.com" className="about-us__link">
            support@email.com
          </a>{" "}
          or call us at{" "}
          <a href="tel:+123456789" className="about-us__link">
            1234567
          </a>
          .
        </p>
      </section>

      <p className="about-us__summary">
        Join TempPlus today and take the next step in your construction career
        or find the perfect temporary team member for your project!
      </p>
    </div>
  );
};

export default AboutPage;
