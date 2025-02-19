import styled from 'styled-components';
import { motion } from 'framer-motion';

// Container principal da página de login
export const LoginPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

// Caixa de login (sem mudanças em telas grandes)
export const LoginBox = styled.div`
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  color: #333;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  max-width: 100%;
  width: 100%;
  padding: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    flex-direction: column; /* No mobile, os elementos ficam empilhados */
    padding: 15px;
  }
`;

// Seção à esquerda (ajustada apenas para mobile)
export const LeftSection = styled.div`
  flex: 1;
  border-radius: 25px 0 0 25px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  color: black;

  @media (max-width: 768px) {
    border-radius: 20px;
    padding: 20px;
    text-align: center;
  }
`;

// Seção à direita (ajustada apenas para mobile)
export const RightSection = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(270deg, #043659 0%, rgba(0, 112, 175, 0.87) 100%);
  border-radius: 0 25px 25px 0;

  @media (max-width: 768px) {
    border-radius: 20px;
    padding: 10px;
  }
`;

// Texto animado
export const AnimatedText = styled(motion.h2)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

// Imagem animada
export const AnimatedImage = styled(motion.img)`
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

// Botão animado (ajustado apenas para mobile)
export const AnimatedButton = styled.button`
  width: 100%;
  background: #3751FE;
  border: none;
  color: #fff;
  padding: 12px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #2a2a72;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px;
  }
`;
