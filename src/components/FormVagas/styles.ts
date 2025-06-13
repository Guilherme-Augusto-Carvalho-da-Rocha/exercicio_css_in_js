import styled from 'styled-components'
import { Theme } from '../../themes/light'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => (props.theme as Theme).corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const SearchButton = styled.button`
  background-color: ${(props) => (props.theme as Theme).corPrincipal};
  border: 1px solid ${(props) => (props.theme as Theme).corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => (props.theme as Theme).corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`

export const SearchInput = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => (props.theme as Theme).corPrincipal};
`
