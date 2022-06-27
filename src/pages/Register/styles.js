import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  margin:100%;
  max-width:1120px;
  height:100vh;
  margin:0 auto;
  display:flex;
  align-items:center;
  justify-content: space-between;
`;
export const Content = styled.div`
   width:100%;
   padding:96px;
   background:#f0f0f5;
   box-shadow:0 0 100px rgba(0, 0, 0.1);
   border-radius:8px;
   display:flex;
   align-items:center;
   justify-content:space-between;
   
`;

export const TextSubtitle = styled.h1`
  font-size:30px;
  margin-bottom:32px;
`;

export const Section = styled.section`
    width:100%;
    max-width:380px;

`;

export const TextParagraph = styled.p`
  font-size:18px;
  color:#737380;
  line-height:32px;

`;

export const InputGroup = styled.div`
  display:flex;
  input + input{
      margin-left:8px;
    }
`;

export const Form = styled.form`
  margin-top:100px;
  width:100%;
  max-width:350px;
  margin-right:30px;
`;

export const Input = styled.input`
    margin-top:8px; 
    width:100%;
    height:60px;
    color:#333;
    border:1px solid #dcdce6;
    border-radius:8px;
    padding:0 24px;
    text-align:center;
`;

export const TextAncora = styled.a`
  display:flex;
  align-items:center;
  margin-top:40px;
  
  a {
    color:#41414d;
  }
  font-size:18px;
  text-decoration:none;
  font-weight:bold;
  transition:opacity 0.2s;
  a svg :hover{
    margin-right:8px ;
  }

  a:hover{
    opacity:0.8;
  }
  
`;

export const Button = styled.button`
    width:100%;
    height:60px;
    background:#e02041;
    border:0;
    border-radius:8px;
    font-weight:700;
    display:inline-block;
    text-align:center;
    color:#fff;
    margin-top:16px;
    display:inline-block;
    text-align:center;
    text-decoration:none;
    font-size:18px;
    line-height:60px;
    cursor:pointer;
    transition:filter 0.2s;
    &:hover{
      filter:brightness(90%);
    
    }

`;
