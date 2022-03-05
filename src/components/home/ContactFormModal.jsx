import React from 'react';
import ContactForm from "./ContactForm";
import {
    Modal,
    Button,
} from "react-bootstrap";

function VerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Contact me
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm contactForm={props.contactForm}/>
        </Modal.Body>
      </Modal>
    );
  }
  
  const ModalButton = ({contactForm, text, isButton=true}) => {
    const [modalShow, setModalShow] = React.useState(false);
    
    return (
      <>
        <a
          className={isButton ? "btn btn-outline-dark btn-lg mt-4 mx-2" : "" }
          onClick={() => setModalShow(true)}
          target="_blank"
          rel="noreferrer noopener"
          role="button"
          aria-label="Contact-me"
        >
          {text}
        </a>
  
        <VerticallyCenteredModal
          contactForm={contactForm}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    )
  }
  
export default ModalButton;