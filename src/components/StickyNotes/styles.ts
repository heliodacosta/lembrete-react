import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
   
    width: 100%;

    .reminderTitle {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;

        margin: 3rem 0;

        > h1 {
            color: white;
            font-family: "Roboto";
            font-weight: lighter;
            font-size: 2rem;
            padding: 10px;
            background-color: var(--blue-color);
            border-radius: 5px;
            
           
            
        }
    }
`;

export const Grid = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

    > div {
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 1.5rem;
    grid-column-gap: 2.5rem;

    width: 90%;

    margin-bottom: 5rem;
    }

    > div > div {
        display: flex;
        flex-direction: column;

        align-items: center;

        height: 15rem;

        padding: 1rem;
        gap: 1rem;

        background-color: var(--yellow-color);
        

        > h2 {
            font-family: "Roboto";
            color: var(--blue-dark);
        
        }
        
        > p {
            font-family: "Roboto";
            width: 90%;
        
        

            overflow: auto;
            text-align: center;
            word-break: break-all;

            &::-webkit-scrollbar {
            display: none;
            }
        }         
    }  
`;