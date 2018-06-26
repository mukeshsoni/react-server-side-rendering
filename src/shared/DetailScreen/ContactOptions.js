import React, { PureComponent } from "react"
import { Flex, Box } from "rebass"
import FlexPlus from "../FlexPlus.js"
import FontAwesome from "react-fontawesome"
import Button from "../Button"
import Space from "styled-space"
import { withTheme } from "styled-components"

const contactOptionsConfig = [
  {
    name: "Call",
    icon: "phone"
  },
  {
    name: "Chat",
    icon: "comments"
  },
  {
    name: "Email",
    icon: "envelope"
  }
]

class ContactOptions extends PureComponent {
  render() {
    const { colors } = this.props.theme

    return (
      <FlexPlus
        justifyContent={["space-between", "space-between", "flex-start"]}
        flexDirection={["row", "row", "column"]}
        alignItems={["center", "center", null]}
        p={2}
        borderTop={`1px solid ${colors.light}`}
        flex="1"
      >
        <Space mr={3}>
          {contactOptionsConfig.map((option, index) => {
            return (
              <Box
                key={"contact_option_" + index}
                flex={[1, 1, 0]}
                p={[0, 0, 2]}
                borderBottom="1px solid black"
                width="100%"
              >
                <Button width="100%">
                  <Flex justifyContent="center" width="100%">
                    <Box mr={[3, 3, 3]}>
                      <FontAwesome name={option.icon} />
                    </Box>
                    {option.name}
                  </Flex>
                </Button>
              </Box>
            )
          })}
        </Space>
      </FlexPlus>
    )
  }
}

export default withTheme(ContactOptions)
