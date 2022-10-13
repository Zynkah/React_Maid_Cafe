import { Container } from "reactstrap";
import MenuList from "../features/menu/MenuList";
import SubHeader from "../components/SubHeader";

const MenuDirectoryPage = () => {
  return (
    <Container>
      <SubHeader current="Menu" />
      <MenuList />
    </Container>
  );
};

export default MenuDirectoryPage;
