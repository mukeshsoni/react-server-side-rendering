import React from "react"
import { Button } from "rebass"
import { width } from "styled-system"

const NewButton = Button.extend`
  background-color: ${props => props.theme.colors.brand};
  min-height: 40px;
  ${width};
`

export default NewButton
