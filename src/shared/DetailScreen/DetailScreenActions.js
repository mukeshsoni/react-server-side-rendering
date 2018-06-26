import React, { PureComponent } from "react"
import { Text } from "rebass"
import FlexPlus from "../FlexPlus.js"
import SubduedColorButton from "../Button/SubduedColorButton.js"
import { withTheme } from "styled-components"

class DetailScreenActions extends PureComponent {
  render() {
    const { colors } = this.props.theme

    return (
      <FlexPlus
        justifyContent="space-between"
        p={3}
        alignItems="center"
        borderBottom={`1px solid ${colors.light}`}
        borderTop={`1px solid ${colors.light}`}
        mb={3}
        flex={1}
      >
        <SubduedColorButton>Edit Ad</SubduedColorButton>
        <Text color={colors.light}>❘</Text>
        <SubduedColorButton>Delete Ad</SubduedColorButton>
        <Text color={colors.light}>❘</Text>
        <SubduedColorButton>Report Ad</SubduedColorButton>
      </FlexPlus>
    )
  }
}

export default withTheme(DetailScreenActions)
