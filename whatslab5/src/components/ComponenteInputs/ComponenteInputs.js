import React from 'react';
import styled from 'styled-components';
import iconDelete from '../../images/delete.svg';
import ComponenteMensagem from '../ComponenteMensagem/ComponenteMensagem';

const ListaMensagensContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 8px;
`

const MensagensContainer = styled.div `
  /* width: 200px; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 8px 0;
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  align-self:  ${props => {
    if(props.align === 'eu') {
      return 'flex-end'
    } else if (props.align === 'eu ') {
      return 'flex-end'
    } else {
      return 'flex-start'
    }
  }};

  background-color: ${props => {
    if(props.color === 'eu') {
      return 'rgb(220, 248, 198)'
    } else if(props.color === 'eu ') {
      return 'rgb(220, 248, 198)'
    } else {
      return 'rgb(255, 255, 255)'
    }
  }};
`

const DeletarBtn = styled.button `
  margin-right: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const CadastrarMensagemContainer = styled.div `
  padding: 8px;
  width: 100%;
  max-width: 500px;
`

const InputNome = styled.input `
  width: 80px;  
  margin: 0 4px;
  padding: 8px;
  height: 24px;
  border: none;
  border-radius: 5px;
`

const InputTexto = styled.input `
  width: 300px;  
  margin: 0 4px;
  padding: 8px;
  height: 24px;
  border: none;
  border-radius: 5px;
`

const BtnCadastrar = styled.button `
  margin: 0 4px;
  padding: 8px;
  height: 40px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  cursor: pointer;
`

const Icon = styled.img `
  height: 24px;
  background-color: transparent;
  cursor: pointer;
`

class ComponenteInputs extends React.Component {

  state = {
    mensagens: [
      { 
        usuario: "",
        texto: ""
      },
    ],
    valorInputUsuario: "",
    valorInputTexto: ""
  }
  
  adicionaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      texto: this.state.valorInputTexto
    };

    const novasMensagens = [...this.state.mensagens, novaMensagem];

    this.setState({mensagens: novasMensagens, valorInputTexto: "", valorInputUsuario: ""})
  
  }

  removeMensagem = mensagemParaRemover => {
    if (window.confirm("Você tem certeza que quer deletar esta mensagem?") === true) {
      const novasMensagens = this.state.mensagens.filter
      (mensagem => {
        return mensagem.texto !== mensagemParaRemover
      });

      this.setState({
        mensagens: novasMensagens
      });
    } else {
      return false;
    }
  }

  onKeyPressed = event => {
    if (event.keyCode === 13 && this.state.valorInputUsuario !== "" && this.state.valorInputTexto !== "") {
      this.adicionaMensagem();
    }
  }
  
  onChangeUsuario = event => {
    this.setState({ valorInputUsuario: event.target.value });
  }
  
  onChangeTexto = event => {
    this.setState({ valorInputTexto: event.target.value })
  }
  
    render() {
        const listaDeMensagens = this.state.mensagens.map( mensagem => {
          if (mensagem.texto !== "") {
            return (
            <MensagensContainer color={mensagem.usuario} align={mensagem.usuario}>
              <ComponenteMensagem
               key={mensagem.texto}
               usuario={mensagem.usuario}
               mensagem={mensagem.texto}
               onDoubleClick={() => {
                this.removeMensagem(mensagem.texto);
              }}
               />
              <DeletarBtn
                onClick={() => {
                  this.removeMensagem(mensagem.texto);
                }}
              >
                <Icon src={iconDelete} />
              </DeletarBtn>
            </MensagensContainer>
            )
          }
        });

        return (
          <div className="Whastlab5">
            <ListaMensagensContainer>
              {listaDeMensagens}
            </ListaMensagensContainer>
            <CadastrarMensagemContainer>
              <InputNome 
                value={this.state.valorInputUsuario}
                placeholder="Usuário"
                onChange={this.onChangeUsuario}
                onKeyDown={this.onKeyPressed}
              />
              <InputTexto
                value={this.state.valorInputTexto}
                placeholder="Mensagem"
                onChange={this.onChangeTexto}
                onKeyDown={this.onKeyPressed}
              />
              <BtnCadastrar onClick={this.adicionaMensagem}>Enviar</BtnCadastrar>
            </CadastrarMensagemContainer>
          </div>
      )
    };
}

export default ComponenteInputs;
