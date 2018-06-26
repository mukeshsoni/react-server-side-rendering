import React, { Component } from "react"
import { Flex, Box, Text } from "rebass"
import FlexPlus from "../FlexPlus.js"
import SearchRow from "./SearchRow.js"
import MultiLevelSelector, { getItemFromPath } from "../MultiLevelSelector"
import Listings from "../Listings.js"
import Filters from "../Filters/Filters"
import HideOnMobile from "../HideOnMobile.js"
import categories from "../categories"
import locations from "../locations.js"
import ModalWithHeight from "../ModalWithHeight.js"
import listingData from "../listing_data"

function getFilteredData(data, searchString) {
  if (!searchString) {
    return data
  }

  return data.filter(
    listing =>
      listing.title.toLowerCase().includes(searchString.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchString.toLowerCase()) ||
      listing.category.toLowerCase().includes(searchString.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchString.toLowerCase())
  )
}

class SearchPage extends Component {
  state = {
    showCategoryModal: false,
    showFilterModal: false,
    showLocationModal: false,
    categoryPath: [],
    locationPath: [],
    selectedListingId: null,
    searchString: ""
  }

  handleCategoryButtonClick = () => {
    this.setState({ showCategoryModal: true })
  }

  applyCategoryFilter = categoryPath => {
    this.setState({ categoryPath, showCategoryModal: false })
  }

  handleCategoryModalCloseClick = () => {
    this.setState({ showCategoryModal: false })
  }

  handleLocationButtonClick = () => {
    this.setState({ showLocationModal: true })
  }

  applyLocationFilter = locationPath => {
    this.setState({ locationPath, showLocationModal: false })
  }

  handleLocationModalCloseClick = () => {
    this.setState({ showLocationModal: false })
  }

  handleListingClick = listingId => {
    this.setState({ selectedListingId: listingId })
    this.props.onListingClick(listingId)
  }

  handleSearchInput = e => {
    this.setState({ searchString: e.target.value })
  }

  render() {
    const {
      showCategoryModal,
      showLocationModal,
      categoryPath,
      locationPath,
      selectedListingId,
      searchString
    } = this.state

    return (
      <FlexPlus
        flexDirection="column"
        width="100%"
        maxWidth={1156}
        margin="auto"
        background="white"
        p={[0, 0, 4]}
      >
        <SearchRow
          category={
            categoryPath.length > 0 &&
            getItemFromPath(categories, categoryPath).name
          }
          location={
            locationPath.length > 0 &&
            getItemFromPath(locations, locationPath).name
          }
          onCategoryButtonClick={this.handleCategoryButtonClick}
          onLocationButtonClick={this.handleLocationButtonClick}
          onInput={this.handleSearchInput}
        />
        <Flex mt={2} p={1}>
          <Text>Results: </Text>
          <Text fontWeight="bold">1234</Text>
        </Flex>
        <Flex width="100%">
          <HideOnMobile flex={[null, 3, 3, 3]}>
            <Filters />
          </HideOnMobile>
          <Box flex={[null, 6, 7, 8]} width="100%">
            <Listings
              data={getFilteredData(listingData, searchString)}
              onListingClick={this.handleListingClick}
            />
          </Box>
        </Flex>
        {showCategoryModal && (
          <ModalWithHeight
            bg="white"
            width={["100vw", "80vw"]}
            height={["100vh", "auto"]}
            p={[0, 0, 4]}
          >
            <MultiLevelSelector
              listType="Categories"
              data={categories}
              onCloseClick={this.handleCategoryModalCloseClick}
              onItemSelection={this.applyCategoryFilter}
            />
          </ModalWithHeight>
        )}
        {showLocationModal && (
          <ModalWithHeight
            bg="white"
            width={["100vw", "80vw"]}
            height={["100vh", "auto"]}
          >
            <MultiLevelSelector
              listType="Locations"
              data={locations}
              onCloseClick={this.handleLocationModalCloseClick}
              onItemSelection={this.applyLocationFilter}
            />
          </ModalWithHeight>
        )}
      </FlexPlus>
    )
  }
}

export default SearchPage
