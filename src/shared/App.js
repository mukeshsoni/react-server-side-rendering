import React, { Component } from "react";
import "./App.css";
import { Flex } from "rebass";
import { Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import Filters from "./Filters/Filters";
// import DetailScreen from "./DetailScreen";
import SearchPage from "./SearchPage";
import ModalWithHeight from "./ModalWithHeight";
import listingData from "./listing_data.js";
import Loadable from "react-loadable";

const Loading = () => <div>Loading...</div>;

const LoadableDetails = Loadable({
  loader: () => {
    return import("./DetailScreen");
  },
  loading: Loading
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      showFilterModal: false,
      selectedListingId: null
    };
  }

  handleListingClick = listingId => {
    this.setState({ selectedListingId: listingId });
  };

  handleFilterLinkClick = () => {
    this.setState({ showFilterModal: true });
  };

  handleApplyFilterClick = filters => {
    this.setState({ showFilterModal: false });
  };

  handleFilterModalBackClick = () => {
    this.setState({ showFilterModal: false });
  };

  render() {
    const { selectedListingId, showFilterModal } = this.state;

    return (
      <Flex flexDirection="column" width="100%" justifyContent="center">
        <Header onFilterLinkClick={this.handleFilterLinkClick} />
        <Switch>
          <Route
            exact={true}
            path="/"
            render={() => (
              <SearchPage onListingClick={this.handleListingClick} />
            )}
          />
          <Route
            exact={true}
            path="/ad/:adId"
            render={({ match }) => {
              return (
                <LoadableDetails
                  listing={listingData.find(
                    listing => listing.id === +match.params.adId
                  )}
                />
              );
            }}
          />
          <Route render={() => <div>Sorry, no such route exits!</div>} />
        </Switch>
        {showFilterModal && (
          <ModalWithHeight
            bg="white"
            width={["100vw", "80vw"]}
            height={["100vh", "auto"]}
          >
            <Filters
              onBackClick={this.handleFilterModalBackClick}
              onApplyFilterClick={this.handleApplyFilterClick}
            />
          </ModalWithHeight>
        )}
      </Flex>
    );
  }
}

export default App;
