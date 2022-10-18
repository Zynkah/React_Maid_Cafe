import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const MenuCard = ({ menu, onClick }) => {
  const { id, image, name } = menu;
  return (
    <Link to={`${id}`}>
      <Card>
      <CardImg 
                width='100%'
                src={image}
                alt={name}
            /> 
        <CardImgOverlay>
        <CardTitle onClick={onClick}>{name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
  );
};

export default MenuCard;