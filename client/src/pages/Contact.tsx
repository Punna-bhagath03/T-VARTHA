import { FormEvent, useEffect } from 'react';

const Contact = (): JSX.Element => {
  useEffect(() => {
    document.title = 'T VARTHA | Contact';
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <section className="content-page">
      <article className="content-card">
        <h1>Contact Us</h1>
        <p>App Name: T VARTHA</p>
        <p>Email: tvartha2026@gmail.com</p>
        <p>Phone: 6304978211</p>

        <h2>Quick Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contactName">Name</label>
          <input id="contactName" type="text" placeholder="Enter your name" />

          <label htmlFor="contactEmail">Email</label>
          <input id="contactEmail" type="email" placeholder="Enter your email" />

          <label htmlFor="contactMessage">Message</label>
          <textarea id="contactMessage" rows={4} placeholder="Type your message" />

          <button type="submit">Send Message</button>
        </form>
      </article>
    </section>
  );
};

export default Contact;
