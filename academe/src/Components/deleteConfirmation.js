import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";

const ConfirmationModal = (props) => {
  const { context, index, id, ...modalProps } = props;

  const handleClickDelete = () => {
    context.handleDelete(index, id);
    props.onHide();
  };

  return (
    <Modal
      {...modalProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Warning</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Delete item</h4>
        <p>Do you sure you want to delete this item?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="outline-dark">
          Cancel
        </Button>
        <Button onClick={handleClickDelete} className="btn btn-danger">
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const DeleteConfirmation = ({ context, index, id }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="outline-danger" onClick={() => setModalShow(true)}>
        Delete
      </Button>

      <ConfirmationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        context={context}
        index={index}
        id={id}
      />
    </>
  );
};

export default DeleteConfirmation;
