import { Col } from "reactstrap";
import Comment from "./Comment";
import { selectCommentsByMenuId } from "./commentsSlice";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";

const CommentsList = ({ menuId }) => {
  const comments = useSelector(selectCommentsByMenuId(menuId));

  if (comments && comments.length > 0) {
    return (
      <Col md="5" className="m-1">
        <h4>Comments</h4>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
        <CommentForm menuId={menuId}/> 
      </Col>
    );
  }
  return (
    <Col md="5" className="m-1">
      There are no comments for this item yet.
    </Col>
  );
};

export default CommentsList;