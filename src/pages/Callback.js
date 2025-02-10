import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CallbackPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');

    if (email) {
      alert(`Login bem-sucedido! Bem-vindo, ${email}`);
      navigate('/dashboard');
    } else {
      alert('Erro ao processar o callback.');
      navigate('/');
    }
  }, [navigate]);

  return <div>Processando login...</div>;
};

export default CallbackPage;
