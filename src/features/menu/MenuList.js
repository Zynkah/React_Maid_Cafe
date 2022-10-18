import { Col, Row } from "reactstrap";
import MenuCard from "./MenuCard";
import { selectAllMenu } from "./menusSlice";
import { useSelector } from "react-redux";
import { useState } from "react";


const MenuList = () => {
  const menus = useSelector(selectAllMenu);
  const [cart, setCart] = useState([]);

  const handleAddItem = (newItem) => {
    setCart([...cart, newItem]);

  };
  return (
    <Row className="ms-auto">
      {menus.map((menu) => {
        return (
          <Col md="3" className="m-4" key={menu.id}>
            <MenuCard menu={menu} onClick={() => handleAddItem(menu)} />
          </Col>
        );
      })}
    </Row>
  );
};

export default MenuList;
