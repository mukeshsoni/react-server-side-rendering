import React, { Component } from "react"
import { Flex } from "rebass"
import SortFilter from "./SortFilter.js"
import TypeOfPosterFilter from "./TypeOfPosterFilter.js"
import FilterHeader from "./FilterHeader.js"
import HideOnNonMobile from "../HideOnNonMobile"
import FullWidthSticky from "../FullWidthSticky"
import FullWidthButton from "../Button/FullWidthButton.js"
import FullHeightFlex from "../FullHeightFlex"

export default class Filters extends Component {
  render() {
    return (
      <FullHeightFlex
        flexDirection="column"
        p={[0, 3]}
        borderRight={["none", "2px solid gray"]}
        width="100%"
      >
        <HideOnNonMobile>
          <FullWidthSticky top={0} bg="white" width="100vw">
            <FilterHeader onBackClick={this.props.onBackClick} />
          </FullWidthSticky>
        </HideOnNonMobile>
        <Flex flex="1 0 auto" flexDirection="column" mt={3}>
          <Flex mt={2}>
            <SortFilter />
          </Flex>
          <Flex mt={2}>
            <TypeOfPosterFilter />
          </Flex>
        </Flex>
        <HideOnNonMobile width="100%">
          <FullWidthSticky bottom={0}>
            <FullWidthButton onClick={this.props.onApplyFilterClick}>
              Apply filter
            </FullWidthButton>
          </FullWidthSticky>
        </HideOnNonMobile>
      </FullHeightFlex>
    )
  }
}
