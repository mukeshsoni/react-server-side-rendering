import React, { PureComponent } from "react"
import { Box, Flex, Text, Image } from "rebass"
import { SubduedText, BoldText } from "./Text"
import FlexPlus from "./FlexPlus"
import Space from "styled-space"
import { withTheme } from "styled-components"

class Listing extends PureComponent {
  render() {
    const {
      onClick,
      theme: { colors }
    } = this.props
    const { title, location, category, price } = this.props.listing

    return (
      <FlexPlus
        p={2}
        borderBottom="1px solid #d4ded9"
        width="100%"
        maxWidth={500}
      >
        <Image src="http://via.placeholder.com/100x100" />
        <Flex flexDirection="column" p={1} ml={[1, 2]}>
          <Space mb={1}>
            <Text fontWeight="bold">{title}</Text>
            <Flex>
              <SubduedText>{location}</SubduedText>,{" "}
              <SubduedText>{category}</SubduedText>
            </Flex>
            <Text color={colors.brand}>Rs. {price}</Text>
          </Space>
        </Flex>
      </FlexPlus>
    )
  }
}

export default withTheme(Listing)
