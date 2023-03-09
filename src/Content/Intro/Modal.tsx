import { Image } from "@chakra-ui/react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { readConfigFile } from "typescript";
import SliderItem from "./SliderItem";

type IExample = {
  image?: string;
};

export default function Example({ image }: IExample) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>
        <SliderItem />
      </div>
      
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <Container>
              <Image src={image} />
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
