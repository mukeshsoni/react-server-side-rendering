import React, { PureComponent } from "react"
import { Divider, Flex, Text, Radio, Label } from "rebass"

export default class TypeOfPosterFilter extends PureComponent {
  render() {
    return (
      <Flex flexDirection="column" width="100%" p={2}>
        <Text>Type of poster</Text>
        <Divider />
        <radiogroup>
          <Label>
            <Radio name="radio" defaultChecked />
            All Posters
          </Label>
          <Label>
            <Radio name="radio" />
            Only members
          </Label>
        </radiogroup>
      </Flex>
    )
  }
}
