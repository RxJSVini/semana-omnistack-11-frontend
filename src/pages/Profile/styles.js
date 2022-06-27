import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  margin:32px auto;
  max-width:1180px;
  padding:0 30px;
`;

export const TextSubtitle = styled.h1`
  margin-top:80px;
  margin-bottom:24px;
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

export const LinkButton = styled.button`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  font-weight: 700;
  /* margin-top: 16px; */
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  filter: filter 0.3s;
  a{
    color: #FFF;
  }
  width: 260px;
  margin-left:auto;
  &:hover{
    border-color:#999;
    transition:border-color 0.2s;
  }
  transition:filter 0.2s;
    &:hover{
      filter:brightness(90%);
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

export const OrdenedList = styled.ul`
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  grid-gap:24px;
  list-style:none;

`;

export const ItemList = styled.li`
  background:#fff;
  padding:24px;
  border-radius:8px;
  position:relative;
`;

export const ButtonLi = styled.button`
  border:0;
  background:#fff;
  position:absolute;
  right:24px;
  top:24px;
  cursor:pointer;

  &:hover{
    opacity:0.8;
  }
`;


export const StrongTitle = styled.strong`
    display:block;
    margin-bottom:16px;
    color:#41414d;
`;

export const Paragraph = styled.p`
  color: #737380;
  line-height:21px;
  font-size:1

`;