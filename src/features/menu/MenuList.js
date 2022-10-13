import { Col, Row } from "reactstrap";
import MenuCard from "./MenuCard";
import { selectAllMenu } from './menusSlice';

const MenuList = () => {
  const menus = selectAllMenu();

  return (
    <Row className="ms-auto">
      {menus.map((menu) => {
        return (
          <Col md="5" className="m-4" key={menu.id}>
            <MenuCard menu={menu} />
          </Col>
        );
      })}
    </Row>
  );
};

export default MenuList;
