import styled from "styled-components";

export const Container = styled.button`
   display: flex;
   padding: 0.7rem 1.5rem;

   background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
   color: white;
   

   font-family: "Roboto";

   border: none;
   border-radius: 0.2rem;

   transition: all 0.3s ease-in-out;

   &:hover {
    cursor: pointer;
    opacity: 0.8;
   }
`;