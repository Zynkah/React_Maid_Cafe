import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedBanquet } from '../banquets/banquetsSlice';
import { selectFeaturedMaids } from '../maids/maidsSlice';

const DisplayList = () => {
  const items = [selectFeaturedCampsite(), selectFeaturedBanquet(), selectFeaturedMaids()];

  return (
    <Row>
      {items.map((item, idx) => {
        return (
          item && (
            <Col md className="m-1" key={idx}>
              <AnimatedDisplayCard item={item} />
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default DisplayList;