import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, ListGroup, Modal, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/Portal.css";

const Portal = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line
  const [loginWindow, setLoginWindow] = useState(null);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (!storedUserName) {
      navigate("/");
    } else {
      setUserName(storedUserName);
    }
  }, [navigate]);

  const platforms = [
    {
      name: "Defender 360",
      image: "defender 360_Prancheta 1.png",
      url: "https://one.kaseya.com/connect/authorize?client_id=ob3kkTrn8K9GpjemjXSj&scope=openid+email&response_type=code&redirect_uri=https%3A%2F%2Fauth.datto.com%2Fk1sso%2Flogin",
    },
    {
      name: "Portal Defender 360",
      image: "logo512.png",
      url: "https://one.kaseya.com/connect/authorize?client_id=ob3kkTrn8K9GpjemjXSj&scope=openid%20email&response_type=code&redirect_uri=https:%2F%2Fauth.datto.com%2Fk1sso%2FloginCallback",
    },
    {
      name: "Portal EDR",
      image: "logo512.png",
      url: "https://one.kaseya.com/connect/authorize?client_id=ZLAHdws3uGGb4MNvkxck&scope=profile%20openid&response_type=code&redirect_uri=https:%2F%2Fitfaci5363.infocyte.com%2Fk1callback",
    },
  ];

  const handlePlatformClick = (url) => {
    // Abre a nova aba de forma oculta (pequena)
    const newWindow = window.open(url, "_blank", "width=1,height=1,left=9999,top=9999");
  
    // Mantém o foco na aba principal
    setTimeout(() => {
      window.focus();
    }, 100);
  
    // Exibe um modal para o usuário enquanto aguarda o redirecionamento
    setShowModal(true);
  
    // Após 10 segundos, fecha a nova aba e redireciona a aba principal para a URL desejada
    setTimeout(() => {
      if (newWindow) {
        newWindow.close();
      }
      setShowModal(false);
      window.location.href = "https://vidal.rmm.datto.com/dashboard"; // Redireciona para a URL desejada
    }, 15000);
  };
  
  const handleLogout = () => {
    localStorage.removeItem("userName");
    const logoutWindow = window.open(
      "https://console.jumpcloud.com/userconsole/logout?autoGo=false",
      "_blank",
      "width=1,height=2"
    );
    if (logoutWindow) {
      setTimeout(() => {
        logoutWindow.close();
        navigate("/");
      }, 2500);
    }
  };

  return (
    <div className="portal-container">
      <Row>
        <Col md={2} className="sidebar">
          <div className="profile-section text-center">
            <img src="profile-user.png" alt="Perfil" className="profile-image" />
            <h4>{userName}</h4>
          </div>
          <ListGroup className="menu-list">
            {platforms.map((platform, index) => (
              <ListGroup.Item key={index} action onClick={() => handlePlatformClick(platform.url)} className="menu-item">
                {platform.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="menu-footer">
            <Button variant="secondary" className="menu-button">Perfil</Button>
            <Button variant="danger" className="menu-button" onClick={handleLogout}>Logout</Button>
          </div>
        </Col>
        <Col md={9} className="content-section">
          <Container>
            <Row className="platform-row">
              {platforms.map((platform, index) => (
                <Col md={4} key={index}>
                  <Card className="portal-card" onClick={() => handlePlatformClick(platform.url)}>
                    <Card.Img variant="top" src={platform.image} className="platform-image" />
                    <Card.Body>
                      <Card.Title className="text-center">{platform.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="welcome-section text-center">
              <h2>Bem-vindo(a),<strong> {userName}!</strong></h2>
              <img src="4046423.jpg" alt="Bem-vindo" className="welcome-image" />
            </div>
          </Container>
        </Col>
      </Row>

      {/* Modal de Login */}
      <Modal show={showModal} centered>
        <Modal.Body className="text-center">
          <h4>Realizando login...</h4>
          <Spinner animation="border" variant="primary" className="mt-3" />
          <p className="mt-3">Aguarde enquanto acessamos a plataforma.</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Portal;