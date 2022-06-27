import React, { useState, useContext } from "react";
import { Context } from "../../contexts/Context";
import { useNavigate } from "react-router-dom";
import {
    Form,
    Input,
    Button,
    LoginContainer,
    Section,
    TextSubtitle,
    TextAncora
} from "./styles";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import heroesImg from "../../assets/heroes.png";
import logo from "../../assets/logo.svg";
import { api } from "../../services/api";
import { useEffect } from "react";

const Login = () => {

    const [iduser, setIdUser] = useState("");
    const { loadUser, user } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        const userSession = JSON.parse(localStorage.getItem("@hero"));
        if (userSession) {
            if (userSession.id === user[0]) {
                return navigate("/profile");
            } else if (!userSession) {
                return navigate('/')
            }
        }
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await api.post("/session", { id: iduser });
            loadUser([iduser, response.data.name]);
            setTimeout(() => {
                navigate("/profile")
            }, 1000)


        } catch (error) {
            alert("Não existe ong com este ID")
            console.error(error.message);
        }

    }
    return (
        <LoginContainer>
            <Section>
                <img src={logo} alt="Be the Hero" style={{ cursor: 'pointer' }} />
                <Form onSubmit={handleSubmit}>
                    <TextSubtitle>Faça seu login</TextSubtitle>
                    <Input value={iduser} placeholder="Sua ID" onChange={(e) => setIdUser(e.target.value)} />
                    <Button type="submit" disabled={iduser.length === 0}>Entrar </Button>

                    <TextAncora>
                        <FiLogIn size={16} color="#E02041" />
                        <Link to="/register" style={{ padding: '3px' }}>
                            Registre-se
                        </Link>

                    </TextAncora>

                </Form>
            </Section>
            <img src={heroesImg} alt="" />
        </LoginContainer>
    )
}
export { Login };