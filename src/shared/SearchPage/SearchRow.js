import React, { Component } from "react"
import { Box, Flex } from "rebass"
import FlexPlus from "../FlexPlus.js"
import FullWidthButton from "../Button/FullWidthButton.js"
import HideOnNonMobile from "../HideOnNonMobile.js"
import Input from "../Input.js"
import { withTheme } from "styled-components"

class SearchRow extends Component {
  render() {
    const {
      onCategoryButtonClick,
      onLocationButtonClick,
      onInput,
      category,
      location,
      theme: { colors }
    } = this.props

    return (
      <Flex flexWrap="wrap" mt={[0, 1]}>
        <FlexPlus width={[1, 1, 1 / 2]} p={[0, 1]} height={[50, null]}>
          <Flex flex="1" mr={[0, 1]}>
            <FullWidthButton onClick={onLocationButtonClick}>
              {location || "Location"}
            </FullWidthButton>
          </Flex>
          <HideOnNonMobile
            bg={colors.light}
            alignItems="center"
            color="#767676"
          >
            ❘
          </HideOnNonMobile>
          <Flex flex="1" mr={[0, 1]}>
            <FullWidthButton onClick={onCategoryButtonClick}>
              {category || "Category"}
            </FullWidthButton>
          </Flex>
        </FlexPlus>
        <Box width={[1, 1, 1 / 2]} p={[1, 1]} mx={[2, 0]} mt={[3, 0]}>
          <Input
            placeholder="Looking for something?"
            mt={10}
            pt={1}
            onInput={onInput}
          />
        </Box>
      </Flex>
    )
  }
}

export default withTheme(SearchRow)
