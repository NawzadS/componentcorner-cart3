import "./Footer.css";

function Footer({ storeName, email, phone }) {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <div>
          <h4 className="footer__title">{storeName}</h4>
          <p className="footer__text">Thanks for checking out my store.</p>
        </div>

        <div>
          <h4 className="footer__title">Contact</h4>
          <p className="footer__text">{email}</p>
          <p className="footer__text">{phone}</p>
        </div>

        <div>
          <h4 className="footer__title">Links</h4>
          <p className="footer__text"><a href="#products">Products</a></p>
          <p className="footer__text"><a href="#about">About</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
