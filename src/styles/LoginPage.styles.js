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

// Caixa de login
export const LoginBox = styled.div`

  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  color: #333;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex; // Adicionado para dividir em duas colunas
  max-width: 100%;
  width: 100%;
  padding: 20px;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
  }
`;

// Seção à esquerda ajustada
export const LeftSection = styled.div`
  flex: 1;
  border-radius: 25px 0 0 25px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  color: black;
`;

// Seção à direita ajustada
export const RightSection = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(270deg, #043659 0%, rgba(0, 112, 175, 0.87) 100%);
  border-radius: 0 25px 25px 0;
`;

// Texto animado acima da imagem
export const AnimatedText = styled(motion.h2)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

// Imagem animada
export const AnimatedImage = styled(motion.img)`
  max-width: 100%;
  height: auto;
`;

// Botão animado
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
`;