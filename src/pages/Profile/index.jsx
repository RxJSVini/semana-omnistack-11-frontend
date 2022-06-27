import React, { useContext, useEffect, useState } from "react";
import {
    Container,
    LinkButton,
    Button,
    Header,
    TextSubtitle,
    OrdenedList,
    ItemList,
    ButtonLi,
    StrongTitle,
    Paragraph
}
    from "./styles";
import { Context } from "../../contexts/Context";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2, FiTool } from "react-icons/fi";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [userLogged, setUserLogged] = useState([{}]);
    const { user } = useContext(Context);
    const [incidentes, setIncidentes] = useState([{}]);

    const navigate = useNavigate();

    useEffect(() => {
        const userSession = JSON.parse(localStorage.getItem("@hero"));
        if (userSession) {
            if (!userSession.id === user[0]) {

                return navigate("/");
            } else {
                setUserLogged(userSession)
            }
        }
    }, [user])


    useEffect(() => {

        api.get("/profile", {
            headers: {
                Authorization: userLogged.id
            }
        })
            .then((response) => {
                setIncidentes(response.data);
            })
            .catch((error) => {
                console.error(error.message);
            })
    }, [userLogged]);



    async function handleDelete(id) {
        const confirm = window.confirm(`Deseja mesmo deletar este item ?`);
        if (confirm) {
            try {
                await api.delete(`/incidentes/${id}`, {
                    headers: {
                        exec: true,
                        Authorization: userLogged.id
                    }
                });

                setIncidentes(incidentes.filter(a => a.id !== id))
            } catch (error) {
                console.error(error);
            }
        }

    }

    function handleLogout(e) {
        e.preventDefault();
        localStorage.removeItem("@hero");
        navigate('/');
    }


    return (
        <Container>
            <Header>
                <img src={logo} alt="Be the Hero" style={{ cursor: 'pointer' }} />
                <span>Bem vindo, {userLogged.name}</span>
                <LinkButton>
                    {/* 60c11ad2 */}
                    <Link to="/incidentes/new">Cadastrar novo caso</Link>
                </LinkButton>
                {Object.keys(userLogged).length === 2 && (
                    
                        <Link to="/admin">
                            <Button>
                            <FiTool>Admin</FiTool>
                            </Button>
                        </Link>
                    
                )}

                <Button type="submit" onClick={handleLogout}>
                    <FiPower size={20} color="#e02041"></FiPower>
                </Button>
            </Header>

            <TextSubtitle>Casos cadastrados</TextSubtitle>
            <OrdenedList>
                {incidentes.map((items) => {

                    return (

                        <ItemList key={items.id}>
                            <StrongTitle>CASO:</StrongTitle>
                            <Paragraph>{items.title}</Paragraph>
                            <StrongTitle>DESCRIAÇÃO</StrongTitle>
                            <Paragraph>{items.description}</Paragraph>

                            <StrongTitle>VALOR:</StrongTitle>
                            <Paragraph>R${items.value}</Paragraph>
                            <ButtonLi onClick={(e) => handleDelete(items.id)}>
                                <FiTrash2 size={20} />
                            </ButtonLi>
                        </ItemList>

                    )
                })}

            </OrdenedList>


        </Container>
    )
}

export { Profile };