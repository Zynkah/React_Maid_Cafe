import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../components/SubHeader";
import MaidsList from "../features/maids/MaidsList";

const Maids = () => {
  return (
    <Container>
      <SubHeader current="Maids" />
      <Row className="row-content">
        <Col sm="6">
          <h3>Our Mission</h3>
          <hr />
          <p>
          Maid cafes focus on providing an escape from the home and work spheres. Furthermore, according to anthropologists such as Anne Allison, a maid cafe lacks the same sexual and caretaker undertones that hostess bars do. Maids encapsulate a more pure form that provides an alternate world to patrons.
          </p>
        </Col>
        <Col sm="6">
          <Card>
            <CardHeader className="bg-light text-center">
              <h3>Banquet Rooms</h3>
            </CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-6">Executive Suite</dt>
                <dd className="col-6">$350</dd>
                <dt className="col-6">Presidential Room</dt>
                <dd className="col-6">$400</dd>
                <dt className="col-6">Royal Ballroom</dt>
                <dd className="col-6">$500</dd>
                <dt className="col-6">Queen's Gardens</dt>
                <dd className="col-6">$600</dd>
              </dl>
              <p><small>**Base room prices, charges may change depending on package selected.**</small></p>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="bg-light mt-3">
            <CardBody>
              <blockquote className="blockquote">
                <p>
                To greet my master in a tidy manner every day. That is a maid's duty.
                <br/> 
                The household shall purge the filth from this manor!
                </p>
                <footer className="blockquote-footer">
                  <p><small>
                    Mey-Rin,{" "}
                    <cite title="Source Title">
                      "Book of Circus" - Black Butler, 2020
                    </cite></small>
                  </p>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="row-content">
        <Col xs="12">
          <h3>Our Maids</h3>
          <hr />
        </Col>
        <MaidsList />
      </Row>
    </Container>
  );
};

export default Maids;