import { useEffect } from 'react';

const PrivacyPolicy = (): JSX.Element => {
  useEffect(() => {
    document.title = 'T VARTHA | Privacy Policy';
  }, []);

  return (
    <section className="content-page">
      <article className="policy-card">
        <h1>Privacy Policy</h1>
        <p>
          This Privacy Policy explains how T VARTHA collects, uses, and protects information when you use our
          platform.
        </p>
        <p>
          <strong>Effective date:</strong> March 5, 2026
        </p>

        <h2>Information We Collect</h2>
        <p>We collect information needed to provide the news posting service.</p>
        <ul>
          <li>Content submitted by users (title, description, and uploaded image).</li>
          <li>Cloudinary-hosted image URLs generated during upload.</li>
          <li>System metadata such as created and updated timestamps.</li>
        </ul>

        <h2>How We Use Information</h2>
        <p>Collected information is used only for core platform operations.</p>
        <ul>
          <li>Publish user-submitted news posts.</li>
          <li>Maintain chronological ordering of updates.</li>
          <li>Improve reliability, security, and user experience.</li>
        </ul>

        <h2>Data Storage and Security</h2>
        <p>
          News metadata is stored in MongoDB and media files are stored through Cloudinary. We use reasonable
          administrative and technical safeguards to protect platform data.
        </p>

        <h2>Third-Party Services</h2>
        <p>We use trusted third-party services to operate the platform.</p>
        <ul>
          <li>Cloudinary for image hosting and delivery.</li>
          <li>MongoDB for persistent data storage.</li>
          <li>Potential ad networks for ad delivery (if enabled in future releases).</li>
        </ul>

        <h2>Data Retention</h2>
        <p>
          We retain post data while it is needed for platform operation, moderation, and legal compliance.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          T VARTHA is not intended for children under 13. We do not knowingly collect personal information from
          children.
        </p>

        <h2>User Rights</h2>
        <p>Users may contact us regarding access, correction, or deletion requests related to their content.</p>

        <h2>Policy Updates</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be published on this page with the
          updated effective date.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy-related questions, contact us at
          {' '}
          <a href="mailto:tvartha2026@gmail.com">tvartha2026@gmail.com</a>.
        </p>
      </article>
    </section>
  );
};

export default PrivacyPolicy;
