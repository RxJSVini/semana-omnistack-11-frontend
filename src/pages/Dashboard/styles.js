import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  margin:32px auto;
  max-width:1180px;
  padding:0 30px;
`;

export const Header = styled.header`
  display:flex;
  align-items:center;
  &:span{
    font-size:20px;
    margin-left:24px;
  }

  &:img{
    height:64px;
  }

`;

export const Button = styled.button`
  height:60px;
  width:60px;
  border-radius:4px;
  border:1px solid #dcdce6;
  background:transparent;
  margin-left:16px;
  cursor:pointer;
  &:hover{
    border-color:#999;
    transition:border-color 0.2s;
  }
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

export const TextAncora = styled.a`
  display:flex;
  align-items:center;
  margin-top:8px;
  margin-left:auto;
  
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