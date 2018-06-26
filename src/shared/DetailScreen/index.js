import React, { Component } from "react"
import { Flex, Carousel, Image, Box, Text, Sticky } from "rebass"
import { BoldText, SubduedText } from "../Text"
import { withTheme } from "styled-components"
import DetailHeader from "./DetailHeader.js"
import DetailScreenActions from "./DetailScreenActions"
import HideOnDesktop from "../HideOnDesktop.js"
import HideOnTablet from "../HideOnTablet.js"
import Header from "../Header.js"
import ListingAttributes from "./ListingAttributes.js"
import ContactOptions from "./ContactOptions"
import FlexPlus from "../FlexPlus.js"

class DetailScreen extends Component {
  render() {
    const {
      listing: { title, price, description },
      theme: { colors }
    } = this.props

    return (
      <FlexPlus flexDirection="column">
        <HideOnDesktop>
          <DetailHeader title={title} />
        </HideOnDesktop>
        <FlexPlus
          flexDirection={["column", "column", "row"]}
          margin="auto"
          width="100%"
          maxWidth={1156}
          background="white"
          p={4}
        >
          <FlexPlus flexDirection="column" flex={3}>
            <Carousel index={false ? 1 : 0} mb={3} flex="3">
              <Box>
                <Image
                  src="http://via.placeholder.com/100x100"
                  width="100%"
                  height={200}
                />
              </Box>
              <Box>
                <Image src="http://via.placeholder.com/100x100" />
              </Box>
            </Carousel>

            <Flex
              p={[3, 3, 4]}
              flexDirection={["column", "column", "row"]}
              justifyContent={[null, null, "space-between"]}
            >
              <Box mr={[0, 0, 6]} maxWidth={400}>
                <BoldText mb={2}>{title}</BoldText>
                <BoldText color={colors.brand} mb={3}>
                  Rs. {price}
                </BoldText>
                <Text mb={4}>{description}</Text>
              </Box>
              <Box>
                <ListingAttributes listing={this.props.listing} />
              </Box>
            </Flex>
          </FlexPlus>
          <HideOnDesktop>
            <DetailScreenActions />
          </HideOnDesktop>
          <ContactOptions />
        </FlexPlus>
      </FlexPlus>
    )
  }
}

export default withTheme(DetailScreen)
