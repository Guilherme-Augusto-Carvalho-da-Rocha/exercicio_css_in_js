import styled from 'styled-components'
import { Theme } from '../../themes/light'

export const EbacJobsCabecalho = styled.header`
  background-color: ${(props) => (props.theme as Theme).corSecundaria};
  color: ${(props) => (props.theme as Theme).corPrincipal};
  text-align: center;
  padding: 24px 0;
`
