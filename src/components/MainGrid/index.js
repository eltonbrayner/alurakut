import styled from 'styled-components'

export const MainGrid = styled.main`
  width: 100%;
  max-width: 500px; //Não estica tanto no tablet
  display: grid;
  gap: 10px;
  padding: 16px;

  //Centralizando os components do MainGrid
  margin-left: auto;
  margin-right: auto;

  .profileArea {
    display: none;
    @media(min-width: 860px){
      display: block;
    }
  }
  
  @media(min-width: 860px){ //Acima de 860 - Mobile First
    max-width: 1110px;
    display: grid;
    grid-template-areas:
      'profileArea welcomeArea profileRelationsArea';
    grid-template-columns: 160px 1fr 312px;
    grid-area: ${props => props.gridarea}
  }
`