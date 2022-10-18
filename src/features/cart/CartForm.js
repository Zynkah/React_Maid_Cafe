import { useState } from "react";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";

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
          <Button outline onClick={() => setCartModalOpen(false)}>
            Keep shopping
          </Button>
        </ModalBody>
      </Modal>
    </>
  );
};
export default CartForm;
