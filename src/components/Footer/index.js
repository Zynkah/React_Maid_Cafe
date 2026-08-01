import { SFooterWrapper, SFooterLinks } from "./styled.js";

const Footer = () => {
  return (
    <SFooterWrapper>
      <div>
        <SFooterLinks role="button" href="tel:+12065551234" target="_blank">
          <i className="fa fa-phone" />
        </SFooterLinks>
        <SFooterLinks
          role="button"
          href="mailto:notreal@notreal.co"
          target="_blank"
        >
          <i className="fa fa-envelope-o" />
        </SFooterLinks>
      </div>
      <div>
        <SFooterLinks href="http://instagram.com/" target="_blank">
          <i className="fa fa-instagram" />
        </SFooterLinks>
        <SFooterLinks href="http://www.facebook.com/" target="_blank">
          <i className="fa fa-facebook" />
        </SFooterLinks>{" "}
        <SFooterLinks href="http://twitter.com/" target="_blank">
          <i className="fa fa-twitter" />
        </SFooterLinks>{" "}
        <SFooterLinks href="http://youtube.com/" target="_blank">
          <i className="fa fa-youtube" />
        </SFooterLinks>
      </div>
    </SFooterWrapper>
  );
};

export default Footer;
