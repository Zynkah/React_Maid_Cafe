import { COMMENTS } from "../../app/shared/COMMENTS";

export const selectCommentsByMenuId = (menuId) => {
    return COMMENTS.filter(
        (comment) => comment.menuId === parseInt(menuId)
    );
};