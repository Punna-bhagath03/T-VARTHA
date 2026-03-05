import { useEffect } from 'react';

const PrivacyPolicy = (): JSX.Element => {
  useEffect(() => {
    document.title = 'T VARTHA | Privacy Policy';
    window.location.replace('/policies/privacy-policy.pdf');
  }, []);

  return (
    <section className="content-page">
      <article className="policy-card">
        <h1>Privacy Policy</h1>
        <p>Redirecting to Privacy Policy PDF...</p>
        <p>
          If the file does not open automatically,
          {' '}
          <a href="/policies/privacy-policy.pdf">click here</a>.
        </p>
      </article>
    </section>
  );
};

export default PrivacyPolicy;
