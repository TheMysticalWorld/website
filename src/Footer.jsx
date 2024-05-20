import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-div">
        <div className="footer-bg">
          <div className="footer-tag">
            Guiding paths,
            <br />
            revealing truths.
          </div>
          <div className="footer-location">
            Jaipur
            <br />
            <br />
            mailme@to.com
            <br />
            +91 0000000000
            <br />
            <br />
            Address to the clinic or
            <br />
            resident.
          </div>
          <div className="footer-links">
            <div>Reach us on:</div>
            <div>
              <a href="">
                <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                Username
              </a>
            </div>
            <div>
              <a href="">
                <i className="fa fa-twitter-square fa-lg"></i>
                Username
              </a>
            </div>
            <div>
              <a href="">
                <i className="fa fa-facebook-official fa-lg" aria-hidden="true"></i>
                Username
              </a>
            </div>
            <div>
              <a href="">
                <i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
                Username
              </a>
            </div>
          </div>
          <div className="footer-base-details">
            <div className="website-credits">
              Designed and developed by: <a href="">Kunal</a>
            </div>
            <div className="website-copyright">Copyright &copy; 2024</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
