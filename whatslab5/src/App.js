import React from 'react';
import styled from 'styled-components';
import './App.css';
import ComponenteInputs from './components/ComponenteInputs/ComponenteInputs';

const AppContainer = styled.div `
  height: 100vh;
  max-width: 500px;
  margin: auto;
  background-color: rgb(229, 221, 213);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`


function App() {
  return (
    <AppContainer>
      <ComponenteInputs></ComponenteInputs>
    </AppContainer>
  );
}

export default App;
