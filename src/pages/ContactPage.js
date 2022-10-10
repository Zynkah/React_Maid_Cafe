import { Container, Col, Row, Card, CardHeader, CardBody } from "reactstrap";
import SubHeader from "../components/SubHeader";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <Container>
      <SubHeader current="Contact Us" />

      <Row className="row-content align-items-center">
        <Col sm="6">
          <Card>
            <CardHeader className="text-center">Visit Us</CardHeader>
            <address>
              <CardBody className="text-center">
                <h3>Zynkah's Maid Cafe</h3>
                4 Maid Cafe Ave
                <br />
                Seattle, WA 98001
                <br />
                U.S.A.
              </CardBody>
            </address>
          </Card>
        </Col>

        <Col md="6">
          <Card>
            <CardHeader className="text-center">Contact Us</CardHeader>
            <CardBody className="text-center">
              <h3>Phone</h3>
              <a role="button" className="btn btn-link" href="tel:+12065551234">
                <i className="fa fa-phone" /> 1-206-555-1234
              </a>
              <br />
              <h3>Email</h3>
              <a
                role="button"
                id="email"
                class="btn btn-link"
                href="mailto:ZynkahsMaidCafe@email.com"
              >
                <i class="fa fa-envelope-o"></i> ZynkahsMaidCafe@email.com
              </a>
            </CardBody>
          </Card>
        </Col>

      </Row>

      <Row className="row-content">
        <Col xs="12">
          <h2>Send Us Your Feedback</h2>
          <hr />
        </Col>

        <Col md="10">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
