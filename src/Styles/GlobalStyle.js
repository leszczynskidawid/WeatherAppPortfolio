import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{

  color:${({ theme }) => theme.body}; 
  background-color:${({ theme }) => theme.body}; 
  
  font-family:Arial, Helvetica, sans-serif;
    transition: 0.2s ease-in, color 0.2s ease-in;
}


`;
