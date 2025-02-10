import React, { useState } from 'react';
import { Modal, Button, ModalFooter } from 'react-bootstrap';
import '../styles/InfoModal.css'

const InfoModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow} className="floating-info-btn">
        O que é o Defender?
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Bem-vindo ao<img width={90} className='mt-4' src='VARIAÇÃO-05.png'></img></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            O <strong>Defender 360</strong> é uma solução completa de segurança e gerenciamento empresarial. 
            Ele oferece proteção avançada contra vírus, malwares e outras ameaças, 
            além de integrar ferramentas para gerenciar dispositivos e dados de forma eficiente.
          </p>
          <p>
            Para fazer login no Defender:
          </p>
          <ol>
            <li>Insira seu email e senha cadastrados no sistema.</li>
            <li>Clique no botão "Login".</li>
            <li>Em caso de dúvidas ou problemas, entre em contato com o suporte técnico.</li>
          </ol>
          <p className='text-center'>
            suporte@itfacil.com.br
          </p>
        </Modal.Body>
        <ModalFooter className="justify-content-center align-items-center">
          <img width={60} src='defender 360_Prancheta 1.png'></img>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default InfoModal;
