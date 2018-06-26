import React, { PureComponent } from "react"
import { Divider, Flex, Text, Select } from "rebass"

export default class SortFilter extends PureComponent {
  render() {
    return (
      <Flex flexDirection="column" width="100%" p={2}>
        <Text>Sort results by:</Text>
        <Divider />
        <Select>
          <option>Date: Newest on top</option>
          <option>Date: Oldest on top</option>
          <option>Price: High to Low</option>
          <option>Price: Low to High</option>
        </Select>
      </Flex>
    )
  }
}
