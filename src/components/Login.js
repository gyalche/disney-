import React from 'react';
import styled from 'styled-components'
const Login=(props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <Signup>GET IT ALL THERE</Signup>
          <Description>Lorium is the fucking Ipsons
            Last month, for example, NASA officials scrambled
             to 
            explain their abrupt cancellation of an initiative 
            to allow employees of its Goddard Space Flight
             Center to more easily display personal pronouns
              in intra-agency communications.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
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
  padding:80px 30px;
  height:100%;
`;

const BgImage=styled.div`
  height:100%;
  background-image: url("../images/login-background.jpg");
  background-size: cover;
  background-position:top;
  background-repeat: no-repeat;
  position:absolute;
  top:0;
  right:0;
  left:0;
  z-index:-1;

`;

const CTA = styled.div`
  margin-bottom:2px;
  max-width:650px;
  flex-wrap:wrap;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:0;
  text-align:center;
  margin-right:auto;
  margin-left:auto;
  transition-timing-function:ease-out;
  transition:opacity 0.2s;
  width:100%;
`;

const CTALogoOne=styled.img`
  margin-bottom:12px;
  max-width:600px;
  min-height:1px;
  display:block;
  width:100%;
  
`

const Signup=styled.a`
  font-weight:bold;
  color:#f9f9f9;
  background-color:#0063e5;
  width:100%;
  margin-bottom:12px;
  letter-spacing:1.5px;
  font-size:18px;
  padding:16.5px 0;
  border:1px solid transparent;
  border-radius:4px;
  cursor:pointer;
  &:hover{
    background-color: #0483ee;
  }
`

const Description=styled.p`
  color:hsla(0,0%,95%,1);
  text-align:center;
  font-size:11px;
  line-height:1.5;
  margin:0 0 24px;
  letter-spacing:1.5px;
`
const CTALogoTwo=styled.img`
  max-width:600px;
  margin-left:auto;
  margin-right:auto;
  object-fit:contain;
  margin-bottom:20px;
  width:100%;
`

export default Login