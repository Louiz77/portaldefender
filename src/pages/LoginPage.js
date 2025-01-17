import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InputField from '../components/InputField';
import InfoModal from '../components/InfoModal';
import ButtonAnimated from '../components/ButtonAnimated';
import LogoImage from '../components/LogoImage';
import '../styles/LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={6} className="login-box">
            <h2 className="text-center mb-4">Defender Login</h2>
            <InputField label="E-mail" type="email" placeholder="Digite seu e-mail" />
            <InputField label="Senha" type="password" placeholder="Digite sua senha" />
            <ButtonAnimated text="Login" onClick={() => alert('Login clicked!')} />

            <div className="text-center mt-3">
              <InfoModal />
            </div>

            <div>
                <LogoImage />
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;