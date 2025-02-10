import React, { useState, useEffect  } from "react";
import { Container, Row, Col, Modal, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import { LoginPageContainer, LoginBox, LeftSection, RightSection, AnimatedButton } from "../styles/LoginPage.styles";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState(0);
  // eslint-disable-next-line
  const [username, setUserName] = useState("");
  const [inputUserName, setInputUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Se o usuário já está autenticado, redireciona automaticamente para o portal
    if (localStorage.getItem("userName")) {
      navigate("/portal");
    }
  }, [navigate]);

  const [jumpCloudWindow, setJumpCloudWindow] = useState(null); // Armazena a janela aberta

  const handleLogin = () => {
    setLoading(true);
    setError("");
    setShowModal(true);
    setProgress(0);
  
    try {
      setStatus("Aguardando...");
      const newWindow = window.open(
        "https://sso.jumpcloud.com/saml2/defender",
        "JumpCloud SSO",
        "width=400,height=600,left=200,top=200"
      );
  
      setJumpCloudWindow(newWindow); // Armazena a referência da janela
  
      let progressValue = 0;
      const interval = setInterval(() => {
        progressValue += 10;
        setProgress(progressValue);
  
        if (progressValue >= 100) {
          clearInterval(interval);
          setShowModal(false);
          setLoading(false);
          verifyUserLogin(inputUserName);
        }
      }, 1500);
    } catch (err) {
      console.error("Erro no processo de login:", err);
      setError("Erro ao iniciar o processo de autenticação.");
      setLoading(false);
      setShowModal(false);
    }
  };  
  
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

  const verifyUserLogin = async (username) => {
    try {
      const response = await fetch("http://localhost:5000/user/authenticated", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });
  
      if (response.ok) {
        const userData = await response.json();
        setUserName(userData.username || "Usuário");
  
        // Armazena no cache do navegador
        localStorage.setItem("userName", userData.username);
  
        // Fecha a janela do JumpCloud antes de redirecionar
        if (jumpCloudWindow && !jumpCloudWindow.closed) {
          jumpCloudWindow.close();
        }
  
        navigate("/portal");
      } else {
        setError("Não foi possível verificar o login. Clique no botão acima para tentar novamente.");
      }
    } catch (err) {
      console.error("Erro ao verificar login:", err);
      setError("Erro ao verificar o login. Tente novamente.");
    }
  };

  const modalAnimation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? "translateY(0%)" : "translateY(-50%)",
  });

  return (
    <LoginPageContainer>
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={12}>
            <LoginBox>
              <LeftSection>
                <motion.img
                  src="VARIAÇÃO-05.png"
                  alt="Logo Defender 360"
                  className="img-fluid"
                  style={{ width: "25%" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                />
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2 }}
                  className="text-left mt-5"
                  style={{ color: "#3751FE", fontSize: "45px", fontWeight: "bold", letterSpacing: "3px" }}
                >
                  Solução completa de segurança e gerenciamento empresarial.
                </motion.h1>
                
                <motion.p style={{ fontSize: "18px", marginBottom: "25%", color: "rgba(0, 0, 0, 0.6)", fontWeight: "600" }}>
                  Insira o seu username e clique no botão abaixo para iniciar o login.
                </motion.p>
                <div className="mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Digite seu username"
                    value={inputUserName}
                    onChange={(e) => setInputUserName(e.target.value)}
                    style={{ marginBottom: "1rem" }}
                  />
                  {loading ? (
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Carregando...</span>
                      </div>
                      <p className="mt-2">{status}</p>
                    </motion.div>
                  ) : (
                    <AnimatedButton onClick={handleLogin}>Login com SSO</AnimatedButton>
                  )}
                  {error && <p className="text-danger">{error}</p>}
                  <p style={{ paddingBottom: "20%", fontSize: "14px", color: "rgba(0, 0, 0, 0.6)", fontWeight: "400" }}>
                    Você será redirecionado para realizar o seu login.
                  </p>
                </div>
                <motion.p style={{ fontSize: "14px", marginBottom: "1.5%", color: "rgba(0, 0, 0, 0.6)", fontWeight: "400" }}>
                  Se deseja alterar de conta, finalize a sessão SSO atual:
                </motion.p>
                <AnimatedButton onClick={handleLogout}>Logout</AnimatedButton>
              </LeftSection>
              <RightSection>
                <motion.img
                  src="VARIAÇÃO-04.png"
                  alt="Logo Defender 360"
                  className="img-fluid"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                />
              </RightSection>
            </LoginBox>
          </Col>
        </Row>
      </Container>
      <animated.div style={modalAnimation}>
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Body className="text-center">
            <h5>Prossiga com as suas credenciais...</h5>
            <p>Você será redirecionado para inserir suas credenciais.</p>
            <ProgressBar animated now={progress} label={`${progress}%`} />
          </Modal.Body>
        </Modal>
      </animated.div>
    </LoginPageContainer>
  );
};

export default LoginPage;