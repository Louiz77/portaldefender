import React from 'react';
import { Form } from 'react-bootstrap';

const InputField = ({ label, type, placeholder }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} />
    </Form.Group>
  );
};

export default InputField;