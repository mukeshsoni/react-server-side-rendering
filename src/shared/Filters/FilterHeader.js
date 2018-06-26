import React, { PureComponent } from "react"
import { Text } from "rebass"
import ContainerWithBg from "../ContainerWithBg"
import FontAwesome from "react-fontawesome"
import { withTheme } from "styled-components"

class FilterHeader extends PureComponent {
  render() {
    const { colors } = this.props.theme

    return (
      <ContainerWithBg
        p={2}
        bg={colors.brand}
        alignItems="center"
        width="100vw"
      >
        <Text fontSize={2} mr={3} onClick={this.props.onBackClick}>
          <FontAwesome name="arrow-left" inverse={true} />
        </Text>
        <Text color="white" fontSize={4}>
          Filters
        </Text>
      </ContainerWithBg>
    )
  }
}

export default withTheme(FilterHeader)
