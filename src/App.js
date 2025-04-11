import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
//import Navbar from "./navbar";
import Signup from "./Signup";
import Login from "./Login";

// Global styles
const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;

// Layout components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Footer = styled.footer`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  text-align: center;
  margin-top: auto;
`;

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
  background-image: url(${require('./assets/IMG_3656.jpeg')});
  background-size: cover;
  background-position: center 30%;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.5);
    z-index: 0;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, #667eea, #764ba2);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    position: relative;
    z-index: 1;
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin-bottom: 2rem;
    color: #555;
    position: relative;
    z-index: 1;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(to right, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Router>
        <AppContainer>
          <MainContent>
            <Routes>
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/" 
                element={
                  <HomePage>
                    <h1>Welcome to Our Sexy Haritha Platform</h1>
                    <p>
                      Join our community to access exclusive features and connect 
                      with like-minded people. Sign up now to get started!
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 1 }}>
                      <CTAButton as="a" href="/signup">Sign Up</CTAButton>
                      <CTAButton as="a" href="/login" style={{ 
                        background: 'white', 
                        color: '#667eea',
                        border: '1px solid #667eea'
                      }}>
                        Login
                      </CTAButton>
                    </div>
                  </HomePage>
                } 
              />
            </Routes>
          </MainContent>
          <Footer>
            © {new Date().getFullYear()} Sexy Haritha. All rights reserved.
          </Footer>
        </AppContainer>
      </Router>
    </>
  );
}

export default App;