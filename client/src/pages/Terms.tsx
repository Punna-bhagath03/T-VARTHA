import { useEffect } from 'react';

const Terms = (): JSX.Element => {
  useEffect(() => {
    document.title = 'T VARTHA | Terms and Conditions';
    window.location.replace('/policies/terms-and-conditions.pdf');
  }, []);

  return (
    <section className="content-page">
      <article className="policy-card">
        <h1>Terms and Conditions</h1>
        <p>Redirecting to Terms and Conditions PDF...</p>
        <p>
          If the file does not open automatically,
          {' '}
          <a href="/policies/terms-and-conditions.pdf">click here</a>.
        </p>
      </article>
    </section>
  );
};

export default Terms;
