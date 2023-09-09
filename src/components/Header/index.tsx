
import { useState } from "react";
import reminderLogo from "../../assets/images/Logo.png";
import { Button } from "../Button";
import { Container } from "./styles";
import { NewStickyModal } from "../NewStickModal";

export function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleOpenModal() {
        setIsModalOpen(true);
    }
   
    function handleCloseModal() {
        setIsModalOpen(false);
    }

    return (
        <Container>
            <img src={reminderLogo} alt="Logo React Reminder" />

            <Button title="Adicionar Lembrete" onClick={handleOpenModal} />

            <NewStickyModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />                       
        </Container>
    );

}