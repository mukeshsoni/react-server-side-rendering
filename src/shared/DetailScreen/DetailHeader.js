import React, { PureComponent } from "react"
import { Flex, Text } from "rebass"
import { Link } from "react-router-dom"
import ContainerWithBg from "../ContainerWithBg"
import FontAwesome from "react-fontawesome"
import { withTheme } from "styled-components"
import Space from "styled-space"

class DetailHeader extends PureComponent {
  render() {
    const {
      title,
      theme: { colors },
      onBackClick
    } = this.props

    return (
      <ContainerWithBg
        p={2}
        bg={colors.brand}
        alignItems="center"
        justifyContent="space-between"
      >
        <Link to="/">
          <Flex p={2} onClick={onBackClick}>
            <FontAwesome size="2x" name="arrow-left" inverse={true} />
          </Flex>
        </Link>
        <Text color="white" fontSize={4}>
          {title}
        </Text>
        <Flex>
          <Space mr={3}>
            <FontAwesome size="2x" name="share-alt" inverse={true} />
            <FontAwesome
              size="2x"
              name="star"
              style={{ color: "white" }}
              inverse={true}
            />
          </Space>
        </Flex>
      </ContainerWithBg>
    )
  }
}

export default withTheme(DetailHeader)
