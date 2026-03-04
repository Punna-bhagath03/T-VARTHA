import { useEffect } from 'react';

const Terms = (): JSX.Element => {
  useEffect(() => {
    document.title = 'T VARTHA | Terms and Conditions';
  }, []);

  return (
    <section className="content-page">
      <article className="policy-card">
        <h1>Terms and Conditions</h1>
        <p>
          Welcome to T VARTHA. By downloading, accessing, or using our application and website, you agree to
          these Terms and Conditions.
        </p>
        <p>
          <strong>Effective date:</strong> March 5, 2026
        </p>

        <h2>Acceptance of Terms</h2>
        <p>
          By accessing or using T VARTHA, you agree to comply with these Terms and Conditions. If you do not
          agree, please do not use the platform.
        </p>

        <h2>Nature of the Service</h2>
        <p>
          T VARTHA is a news platform that may present curated or aggregated news information and user-posted
          updates.
        </p>
        <ul>
          <li>We may display publicly available content from third-party sources.</li>
          <li>Original content rights remain with their respective authors and publishers.</li>
          <li>Where available, users can access source links for publisher content.</li>
        </ul>

        <h2>User Responsibilities</h2>
        <ul>
          <li>Use the application only for lawful purposes.</li>
          <li>Do not interfere with normal operation of the application.</li>
          <li>Do not attempt to reverse engineer, exploit, or misuse the platform.</li>
          <li>Do not publish content that violates rights of others.</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          Trademarks, logos, and third-party news content shown in T VARTHA belong to their respective owners.
          T VARTHA does not claim ownership over third-party publisher content.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          The platform may include links to external publisher websites. We do not control and are not
          responsible for third-party content, terms, or privacy practices.
        </p>

        <h2>Advertisements</h2>
        <p>
          T VARTHA may display ads through third-party ad networks. These services may process device or usage
          information according to their own policies.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          T VARTHA is provided on an "as is" basis without warranties of any kind. We do not guarantee the
          completeness, accuracy, or reliability of third-party news content.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Updates will be published on this page with a revised
          effective date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions regarding these Terms and Conditions, contact us at
          {' '}
          <a href="mailto:tvartha2026@gmail.com">tvartha2026@gmail.com</a>.
        </p>
      </article>
    </section>
  );
};

export default Terms;
