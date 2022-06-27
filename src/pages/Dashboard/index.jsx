import React from "react";
import { Container, Header, TextAncora } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import logo from "../../assets/logo.svg";
import {  Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <Container>
            <Header>
                <img src={logo} alt="Be the Hero" style={{ cursor: 'pointer' }} />
                <span>Bem vindo ao Manager</span>

                <TextAncora>
                    <FiArrowLeft size={16} color="#E02041"/>
                    <Link to="/profile">Voltar</Link>
                
                </TextAncora>
    
            </Header>
        </Container>
    )
}

export { Dashboard };