import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import { removeItem } from './cartSlice';


const CartForm = () => {
  const [cartModalOpen, setCartModalOpen] = useState(false);

  return (
    <>
      <Button
        outline
        onClick={() => setCartModalOpen(true)}
        style={{ color: "white", border: "1px solid white" }}
      >
        <i className="fa fa-shopping-cart fa-lg" /> Cart
      </Button>

      <Modal isOpen={cartModalOpen}>
        <ModalHeader>Cart</ModalHeader>
        <ModalBody>
        <Checkout />
          <Button outline onClick={() => setCartModalOpen(false)}>
            Keep shopping
          </Button>
        </ModalBody>
      </Modal>
    </>
  );
};
export default CartForm;

export const Checkout = () => {
 const cartList = useSelector(state => state.cart.items)
 const dispatch = useDispatch();
 return (
    <ul>
    {cartList.map((item, index) => 
    <li key={index}
      onClick={() => dispatch(removeItem(index))}
    >
      {item.name} {' '}
      {item.price}
    </li>) }
    </ul>
  )
}
