import { React } from "react";
import './App.css'
import TodoTemplate from './components/TodoTemplate.js';
import Head from './components/Head.js';
import List from './components/List.js';
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return(
    <>
    <GlobalStyle />
    <TodoTemplate>
      <Head/>
      <List/>
    </TodoTemplate>
    </>
  )
}

export default App;