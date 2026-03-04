import { Link } from 'react-router-dom';

const Footer = (): JSX.Element => {
  return (
    <footer className="site-footer">
      <div>
        <strong>T VARTHA</strong>
        <p>Email: tvartha2026@gmail.com</p>
        <p>Contact: 6304978211</p>
      </div>
      <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms & Conditions</Link>
      </div>
    </footer>
  );
};

export default Footer;
