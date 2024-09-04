function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact">
          <h4>
            <em>Contact</em>
          </h4>
          <div className="footer-contact">
            <h5>Atlanta</h5>
            <p>
              1201 W Peachtree St NW
              <br />
              Suite 2300
              <br />
              Atlanta, GA 30309
              <br />
              <a href="tel:+14048601555">(404) 860-1555</a>
            </p>
            <h5>San Francisco</h5>
            <p>
              388 Market St
              <br />
              Suite 1300
              <br />
              San Francisco, CA 94111
              <br />
              <a href="tel:+14152286861">(415) 228-6861</a>
            </p>
          </div>
        </div>
        <div className="footer-section info">
          <h4>
            <em>Info</em>
          </h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Case Studies</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Accessibility Statement</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          <h4>
            <em>Social</em>
          </h4>
          <div className="social-icons">
            <a href="#">
              <img src="/social-icons/facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/social-icons/twitter.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="/social-icons/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="#">
              <img src="/social-icons/yelp.png" alt="Yelp" />
            </a>
            <a href="#">
              <img src="/social-icons/instagram.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/social-icons/pinterest-logo.png" alt="Pinterest" />
            </a>
          </div>
        </div>
        <div className="footer-section logo">
          <img src="/logo.webp" alt="DEEPBLUE Logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
