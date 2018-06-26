import React, { PureComponent } from "react"
import { Text, Flex, Box } from "rebass"
import SubduedText from "../Text/SubduedText.js"

class ListingAttributes extends PureComponent {
  render() {
    const { attributes } = this.props.listing

    if (!attributes) {
      return null
    }

    return (
      <Flex flexDirection="column">
        {Object.keys(attributes).map((prop, index) => {
          return (
            <Flex
              flexDirection={["column", "column", "row"]}
              justifyContent={[null, null, "space-between"]}
              mb={3}
              key={index}
            >
              <SubduedText mb={[1, 1, 0]} mr={[null, null, 3]}>
                {prop}
              </SubduedText>
              <Text>{attributes[prop]}</Text>
            </Flex>
          )
        })}
      </Flex>
    )
  }
}

export default ListingAttributes
