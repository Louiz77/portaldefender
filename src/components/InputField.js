import React from 'react';
import { Form } from 'react-bootstrap';

const InputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange} // Certifique-se de que este evento está sendo propagado
      />
    </Form.Group>
  );
};

export default InputField;