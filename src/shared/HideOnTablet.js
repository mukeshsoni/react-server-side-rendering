import React from "react"
import { Flex } from "rebass"

const HideOnMobile = Flex.extend`
  display: none;
  @media only screen and (min-width: 800px) {
    display: flex;
  }
`

export default HideOnMobile
