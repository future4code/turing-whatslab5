import React from 'react';
import styled from 'styled-components';

const MensagemContainer = styled.div `
  width: 200px;
  justify-self: flex-end;
  
`
const NomeUsuario = styled.span `
  font-weight: 700;
  display:  ${props => {
    if(props.display === 'eu') {
      return 'none'
    } else if(props.display === 'eu ') {
      return 'none'
    } else {
      return 'inline'
    }
  }};
`

class ComponenteMensagem extends React.Component {
  render() {
    return (
      <MensagemContainer onDoubleClick={this.props.onDoubleClick}>
        <p><NomeUsuario display={this.props.usuario} >{this.props.usuario}: </NomeUsuario>{this.props.mensagem}</p>
      </MensagemContainer>
    );
  }
}

export default ComponenteMensagem;
