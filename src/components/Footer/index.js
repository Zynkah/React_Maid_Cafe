import { SFooterWrapper, SFooterLinks } from "./styled.js";

const Footer = () => {
  return (
    <SFooterWrapper>
      <div>
        <SFooterLinks
          role="button"
          className="btn btn-link footer-link"
          href="tel:+12065551234"
        >
          <i className="fa fa-phone" />
        </SFooterLinks>
        <SFooterLinks
          role="button"
          className="btn btn-link"
          href="mailto:notreal@notreal.co"
        >
          <i className="fa fa-envelope-o" />
        </SFooterLinks>
      </div>
      <div>
        <SFooterLinks
          className="btn btn-social-icon btn-outline-instagram"
          href="http://instagram.com/"
        >
          <i className="fa fa-instagram" />
        </SFooterLinks>
        <SFooterLinks
          className="btn btn-social-icon btn-outline-facebook"
          href="http://www.facebook.com/"
        >
          <i className="fa fa-facebook" />
        </SFooterLinks>{" "}
        <SFooterLinks
          className="btn btn-social-icon btn-outline-twitter"
          href="http://twitter.com/"
        >
          <i className="fa fa-twitter" />
        </SFooterLinks>{" "}
        <SFooterLinks
          className="btn btn-social-icon btn-outline-google"
          href="http://youtube.com/"
        >
          <i className="fa fa-youtube" />
        </SFooterLinks>
      </div>
    </SFooterWrapper>
  );
};

export default Footer;
