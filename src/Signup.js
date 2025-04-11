import React, { useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaArrowRight } from "react-icons/fa";

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 84%;
  padding: 15px 15px 15px 45px;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #667eea;
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`;

const Icon = styled.span`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
`;

const Button = styled(motion.button)`
  background: linear-gradient(to right, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const Message = styled(motion.p)`
  text-align: center;
  color: ${props => props.error ? '#e74c3c' : '#2ecc71'};
  font-weight: 500;
`;

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userData = { username, password };

    try {
      const response = await axios.post("http://localhost:8000/signup", userData);
      setMessage(response.data.message);
      setIsError(false);
      // Clear form on success
      setUsername("");
      setPassword("");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error creating user. Please try again.");
      setIsError(true);
    }
  };

  return (
    <Container>
      <Card
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Create Your Account</Title>
        
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Icon><FaUser /></Icon>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </InputGroup>
          
          <InputGroup>
            <Icon><FaLock /></Icon>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
            />
          </InputGroup>
          
          <Button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign Up <FaArrowRight />
          </Button>
        </Form>
        
        {message && (
          <Message
            error={isError}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {message}
          </Message>
        )}
      </Card>
    </Container>
  );
}

export default Signup;