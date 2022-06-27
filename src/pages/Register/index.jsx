import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logo from "../../assets/logo.svg";
import { api } from "../../services/api";


import {
    Container,
    Content,
    Section,
    Form,
    TextSubtitle,
    TextAncora,
    Input,
    InputGroup,
    Button,
    TextParagraph
} from "./styles";




const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const navigate = useNavigate();



    async function  handleRegister(e){
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }    
        try {
            const response = await api.post("/ongs", data);
            alert(`Seu código é : ${response.data.id}`);
            return navigate("/");
        

        } catch (error) {
            throw new Error(error);
        }
        
    }



    return (
        <Container>
            <Content>
                <Section>
                    <img src={logo} alt="Be the Hero" style={{ cursor: 'pointer' }} />
                    <TextSubtitle style={{ marginTop: '10px' }}>
                        Cadastro
                    </TextSubtitle>
                    <TextParagraph>Faça seu cadastro, entre na plataforma e ajude a encontrar os casos da sua ONG</TextParagraph>

                    <TextAncora>
                        <FiArrowLeft size={16} color="#E02041" />
                        <Link to="/" style={{ padding: '3px' }}>
                            Tenho cadastro
                        </Link>
                    </TextAncora>
                </Section>
                <Form onSubmit={handleRegister}>
                    <Input
                        value={name}
                        placeholder="Nome da ONG"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        value={email}
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        value={whatsapp}
                        placeholder="Whatsapp"
                        onChange={(e) => setWhatsapp(e.target.value)}
                    />

                    <InputGroup>
                        <Input
                            value={city}
                            placeholder="Cidade"
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <Input
                            value={uf} placeholder="UF"
                            style={{ width: '80px' }}
                            onChange={(e) => setUf(e.target.value)}
                        />
                    </InputGroup>
                    <Button type="submit">Cadastrar</Button>
                </Form>

            </Content>
        </Container>
    )
}

export { Register };