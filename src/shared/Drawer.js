import React, { PureComponent } from "react"
import { Flex, Divider, Link } from "rebass"
import { withTheme } from "styled-components"

class Drawer extends PureComponent {
  render() {
    return (
      <Flex flexDirection="column" p={2}>
        <YellowButton mb={3}>Post your ad</YellowButton>
        <SubduedText>ADS</SubduedText>
        <Divider w={1} />
        <Link>All ads</Link>
        <Link>Post your ad</Link>
      </Flex>
    )
  }
}

export default withTheme(Drawer)
