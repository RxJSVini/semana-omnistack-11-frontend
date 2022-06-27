import React, { useState, useContext, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import {
    Container,
    Content,
    Section,
    Form,
    TextSubtitle,
    TextAncora,
    Input,
    TextArea,
    Button,
    TextParagraph

} from "./styles";
import { api } from "../../services/api";
import { Context } from "../../contexts/Context";

const NewIncident = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const [userLogged, setUserLogged] = useState([{}]);
    const { user } = useContext(Context);

    useEffect(() => {
        const userSession = JSON.parse(localStorage.getItem("@hero"));
        if (userSession) {
            if (!userSession.id === user[0]) {

                return navigate("/");
            }
            setUserLogged(userSession)
        }
    }, [user])

    const data = {
        title,
        description,
        value
    }

    async function handleRegister(e) {
        e.preventDefault();

        try {
            const response = await api.post("/incidents", data, {
                headers: { Authorization: userLogged.id }
            })
            navigate("/profile");
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <Container>
            <Content>
                <Section>
                    <img src={logo} alt="Be the Hero" style={{ cursor: 'pointer' }} />
                    <TextSubtitle style={{ marginTop: '10px' }}>
                        Cadastrar novo caso
                    </TextSubtitle>
                    <TextParagraph>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</TextParagraph>

                    <TextAncora>
                        <FiArrowLeft size={16} color="#E02041" />
                        <Link to="/profile" style={{ padding: '3px' }}>
                            Voltar para a Home
                        </Link>
                    </TextAncora>
                </Section>
                <Form onSubmit={handleRegister}>
                    <Input
                        value={title}
                        placeholder="Titulo do caso"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextArea
                        value={description}
                        placeholder="Descrição"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Input
                        value={value}
                        type="number"
                        placeholder="Valor em reais"
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Button type="submit">Cadastrar</Button>
                </Form>

            </Content>
        </Container>
    )
}
export { NewIncident }; 