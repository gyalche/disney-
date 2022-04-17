import React from 'react';
import './Login.css';
import styled from 'styled-components'
const Login=(props) => {
  return (
    <Container>
      <Content>
        <BgImage />
      </Content>
    </Container>
  )
};

const Container=styled.section`
  overflow:hidden;
  display:flex;
  flex-direction:column;
  text-align:center;
  height:100vh
`;
const Content=styled.div`
  margin-bottom: 10vw;
  width:100%;
  position:relative;
  justify-content:center;
  align-items:center;
  min-height:100vh;
  display:flex;
  flex-direction:column;
  padding:80px 40px;
  height:100%;
`;

const BgImage=styled.div`
  height:100%;
  background-image: url("../images/login-background.jpg);
  background-size: cover;
  background-position:top;
  background-repeat: no-repeat;
  position:absolute;
  top:0;
  right:0;
  left:0;
  z-index:-1;

`;

export default Login