import React, { PureComponent } from "react"
import { Flex, Box, Text } from "rebass"
import ContainerWithBg from "./ContainerWithBg"
import FontAwesome from "react-fontawesome"
import { withTheme } from "styled-components"

class MultiLevelSelectHeader extends PureComponent {
  render() {
    const { path, theme, listType } = this.props

    return (
      <ContainerWithBg
        p={2}
        bg={theme.colors.brand}
        alignItems="center"
        alignItems="center"
      >
        <Flex p={2}>
          <Text fontSize={2} mr={2} onClick={this.props.onCloseClick}>
            {path.length > 0 ? (
              <FontAwesome name="arrow-left" inverse={true} />
            ) : (
              <FontAwesome name="close" inverse={true} />
            )}
          </Text>
          <Text color="white" fontSize={4}>
            {path.length === 0 ? listType : "Back"}
          </Text>
        </Flex>
      </ContainerWithBg>
    )
  }
}

export default withTheme(MultiLevelSelectHeader)
