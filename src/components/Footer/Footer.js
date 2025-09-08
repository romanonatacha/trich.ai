import "./Footer.scss";

const Footer = () => (
  <footer className="footer page-footer">
    <div className="container">
      <div className="row">
        <div className="nav social-icons justify-content-end">
          <a
            className="nav-link"
            href="https://www.kaggle.com/kabure/kernels"
            target="_blank"
            title="Kaggle"
            rel="noopener noreferrer"
          >
            <i className="fab fa-kaggle"></i>
          </a>
          <a
            className="nav-link"
            href="https://github.com/kaburelabs"
            target="_blank"
            title="GitHub"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="nav-link"
            href="https://www.linkedin.com/company/trich-ai/"
            target="_blank"
            title="Linkedin"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        <a className="company" href="#!">
          TRICH SOLUCOES EM DADOS E TECNOLOGIA - 29.514.225/0001-48
        </a>
        <a
          className="creator"
          href="https://www.linkedin.com/in/leonardoferreirads/"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2025 Updated by Leonardo Ferreira
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
