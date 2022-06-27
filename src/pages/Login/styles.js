import styled from "styled-components";

export const Form = styled.form`
  margin-top:100px;
  width:100%;
  max-width:350px;
  margin-right:30px;
`;

export const TextSubtitle = styled.h1`
    margin:64px 0 32px;
    font-size:32px;
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

export const Input = styled.input`
    width:100%;
    height:60px;
    color:#333;
    border:1px solid #dcdce6;
    border-radius:8px;
    padding:0 24px;
    text-align:center;

`;


export const LoginContainer = styled.div`
  width:100%;
  margin:100%;
  max-width:1120px;
  height:100vh;
  margin:0 auto;
  display:flex;
  align-items:center;
  justify-content: space-between;

`;


export const TextAncora = styled.a`
  display:flex;
  align-items:center;
  margin-top:40px;
  
  color:#41414d;
  font-size:18px;
  text-decoration:none;
  font-weight:bold;
  transition:opacity 0.2s;
  a {
    color:#41414d;
  }
  a svg :hover{
    margin-right:8px ;
  }

  a:hover{
    opacity:0.8;
  }
  
`;


export const Section = styled.section`

`;  