import React from "react"
import { Button } from "rebass"

const FullWidthButton = Button.extend`
  background-color: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.brand}
  width: 100%;
  border-radius: 0;
  min-height: 100%;
  font-size: 19px;
`

export default FullWidthButton
