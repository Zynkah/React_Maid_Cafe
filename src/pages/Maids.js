import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../components/SubHeader";
import MaidsList from "../features/maids/MaidsList";
import presidentsRoom from '../app/assets/img/presidentsRoom.jpg';
import queensGarden from '../app/assets/img/queensGardens.jpg';
import royalBallroom from '../app/assets/img/royalBallroom.jpg';
import executiveSuite from '../app/assets/img/executiveSuite.jpg';

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
           <Card>
            <CardHeader className="bg-light text-center">
              <h3>Banquet Rooms <br/> <small>Prices</small></h3>
            </CardHeader>
            <CardBody>
              <dl className="row text-center">
                <dt className="col-6">Executive Suite</dt>
                <dd className="col-6">$350</dd>
                <dt className="col-6">Presidential Room</dt>
                <dd className="col-6">$400</dd>
                <dt className="col-6">Royal Ballroom</dt>
                <dd className="col-6">$500</dd>
                <dt className="col-6">Queen's Gardens</dt>
                <dd className="col-6">$600</dd>
              </dl>
              <p className="text-center"><small>**Base room prices, charges may change depending on package selected.**</small></p>
            </CardBody>
          </Card>
            <hr />
            <p>
          There are multiple packages to choose from and we make special events memorable. We wish to make your special day as special as you! Please consider us for your next big event, birthday, holiday, or anything you wish to celebrate.
          </p>
        </Col>
        <Col sm="6">
        <Card>
            <CardHeader className="text-center">Banquet Rooms</CardHeader>
              <CardBody>
                <dl className="row">
                 <dt className="col-md-6 text-center"><small>executive suite</small> <br /> <img src={executiveSuite} alt="executive suite" className="d-block w-100" /> </dt>
                 <dd className="col-md-6 text-center"><small>presidents room</small> <br /> <img src={presidentsRoom} alt="presidents room" className="d-block w-100" /> </dd>
                 <dt className="col-md-6 text-center"><small>royal ballroom</small> <br /> <img src={royalBallroom} alt="royal ballroom" className="d-block w-100" /> </dt>
                 <dd className="col-md-6 text-center"><small>queens garden</small> <br /> <img src={queensGarden} alt="queens garden" className="d-block w-100" /> </dd>
                </dl>
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