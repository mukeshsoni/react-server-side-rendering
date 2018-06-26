import React from "react"
import { Flex } from "rebass"

const HideOnNonMobile = Flex.extend`
  display: none;
  @media only screen and (max-width: 500px) {
    display: flex;
  }
`

export default HideOnNonMobile
