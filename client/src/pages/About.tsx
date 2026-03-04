import { useEffect } from 'react';

const About = (): JSX.Element => {
  useEffect(() => {
    document.title = 'T VARTHA | About';
  }, []);

  return (
    <section className="content-page">
      <article className="content-card">
        <h1>About T VARTHA</h1>
        <p>
          T VARTHA is a modern news posting platform designed to help users share the latest updates quickly
          and clearly.
        </p>

        <h2>What We Do</h2>
        <p>
          Users can create news posts by adding a title, description, and image. Every post is timestamped
          automatically and displayed with newest updates first.
        </p>

        <h2>Technology & Security</h2>
        <ul>
          <li>Frontend built with React and TypeScript.</li>
          <li>Backend powered by Node.js, Express, and TypeScript.</li>
          <li>Data stored in MongoDB using Mongoose.</li>
          <li>Images uploaded and stored securely through Cloudinary.</li>
        </ul>

        <h2>Our Vision</h2>
        <p>
          T VARTHA aims to provide a clean, reliable, and scalable platform for community news and timely
          updates.
        </p>
      </article>
    </section>
  );
};

export default About;
