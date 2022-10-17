import { Col, Row } from "reactstrap";
import MenuCard from "./MenuCard";
import { selectAllMenu } from './menusSlice';
import { useSelector } from "react-redux";

const MenuList = () => {
  const menus = useSelector(selectAllMenu);

  return (
    <Row className="ms-auto">
      {menus.map((menu) => {
        return (
          <Col md="3" className="m-4" key={menu.id}>
            <MenuCard menu={menu} />
          </Col>
        );
      })}
    </Row>
  );
};

export default MenuList;
