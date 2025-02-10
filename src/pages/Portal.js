import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/Portal.css";
import { AnimatedButton } from "../styles/LoginPage.styles";

const Portal = () => {
  // eslint-disable-next-line
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    
    if (!storedUserName) {
      navigate("/"); // Se não estiver autenticado, volta para o login
    } else {
      setUserName(storedUserName);
    }
  }, [navigate]);

  const platforms = [
    {
      name: "Defender 360",
      image: "defender 360_Prancheta 1.png",
      url: "https://one.kaseya.com/connect/authorize?client_id=ob3kkTrn8K9GpjemjXSj&scope=openid+email&response_type=code&redirect_uri=https%3A%2F%2Fauth.datto.com%2Fk1sso%2Flogin&state=48cde255-da5b-4ade-91dd-843db9af5921",
    },
    {
      name: "Portal Defender 360",
      image: "logo512.png",
      url: "https://one.kaseya.com/connect/authorize?client_id=ob3kkTrn8K9GpjemjXSj&scope=openid%20email&response_type=code&redirect_uri=https:%2F%2Fauth.datto.com%2Fk1sso%2FloginCallback&state=5a55b68f-2dc0-49e4-adf0-8b60214b83a7&login_hint=amhYVjRNVnp1Y3RNdnR4OVgrY3VjOS9ORlIrQzE3aTh4YkNHVmR3cWtrVk1jUmtxRy9uYzFaamNyQTZOYmt5dTQxWWhQWk1kWVBBd3VHWnhSL2VTcDU2UUpmV0NsQUxtUlZ1UkVZL3lXZEU9", // Coloque a URL correta aqui
    },
    {
      name: "Portal EDR",
      image: "logo512.png",
      url: "https://one.kaseya.com/connect/authorize?client_id=ZLAHdws3uGGb4MNvkxck&scope=profile%20openid&response_type=code&redirect_uri=https:%2F%2Fitfaci5363.infocyte.com%2Fk1callback&state=%7B%22operation%22:%22login%22,%22code%22:%22a731d947-ad6b-4bef-889d-9045a429574f%22%7D&login_hint=NDlDRXd0eVViaG5RdHFJVUhpWkVnSlB0TGFIQjJjRkJnVmlzdVZWUmlDd09GY0RPK3dRNWVXQ1Vqc28zdTdvL2FtVzhrWWd5WW1KNlpMMDVCM0VKM1MwN2NldzRFUk4vUlZ1UkVZL3lXZEU9", // Coloque a URL correta aqui
    },
  ];

  const handleLogout = () => {
    // Apaga cache do usuário ao deslogar
    localStorage.removeItem("userName");

    // Abre a URL de logout
    const logoutWindow = window.open("https://console.jumpcloud.com/userconsole/logout?autoGo=false", "_blank", "width=600,height=400");

    if (logoutWindow) {
      setTimeout(() => {
        logoutWindow.close();
        navigate("/"); // Redireciona para a home
      }, 5000);
    }
  };
  
  return (
    <div className="portal-container">
        <Container fluid>
        <h1 className="text-center mb-4">Bem-vindo ao Portal, {userName}!</h1>
        <h2 className="text-center mb-4">Selecione a plataforma desejada</h2>
        <Row className="justify-content-center">
            {platforms.map((platform, index) => (
            <Col md={2} key={index} className="mb-4">
                <Card
                className="portal-card"
                onClick={() => (window.location.href = platform.url)}
                >
                <Card.Img variant="top" src={platform.image} />
                <Card.Body>
                    <Card.Title>{platform.name}</Card.Title>
                </Card.Body>
                </Card>
                <AnimatedButton onClick={handleLogout}>Logout</AnimatedButton>
            </Col>
            ))}
        </Row>
        </Container>
    </div>
  );
};

export default Portal;