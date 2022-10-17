import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectMenuById } from '../features/menu/menusSlice';
import MenuDetail from "../features/menu/MenuDetail";
import CommentsList from "../features/comments/CommentsList";
import SubHeader from "../components/SubHeader";
import { useSelector } from "react-redux";

const MenuDetailPage = () => {
  const { menuId } = useParams();
  const menu = useSelector(selectMenuById(menuId));

  return (
    <Container>
      <SubHeader current={menu.name} detail={true} />
      <Row>
        <MenuDetail menu={menu} />
        <CommentsList menuId={menuId} />
      </Row>
    </Container>
  );
};

export default MenuDetailPage;
