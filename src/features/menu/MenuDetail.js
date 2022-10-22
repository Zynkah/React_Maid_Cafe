import { useDispatch } from "react-redux";
import { Card, CardImg, CardText, CardBody, Col, Button } from "reactstrap";
import { addItem } from "../cart/cartSlice";

const MenuDetail = ({ menu }) => {
  const { image, name, description, price } = menu;

  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addItem(menu));
  };

  return (
    <Col md="5" className="m-1">
      <Card>
        <CardImg top src={image} alt={name} />
        <CardBody>
          <CardText>
            {description}
            <br />
            {" Price: "}
            {price}
          </CardText>
          <Button outline onClick={ handleSubmit }>
            Add to <i className="fa fa-shopping-cart" />
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MenuDetail;
