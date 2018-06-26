import React, { Component } from "react";
import { Box } from "rebass";
import { Link } from "react-router-dom";
import Listing from "./Listing.js";
import FlexPlus from "./FlexPlus";

export default class Listings extends Component {
  getListings() {
    return this.props.data.map((listing, index) => {
      return (
        <FlexPlus flex="1" minWidth={300} index={"listing_" + listing.id}>
          <Link to={`/ad/${listing.id}`} key={index}>
            <Listing
              listing={listing}
              onClick={this.props.onListingClick.bind(this, listing.id)}
            />
          </Link>
        </FlexPlus>
      );
    });
  }

  render() {
    return (
      <FlexPlus width="100%" mt={10} flexWrap="wrap">
        {this.getListings()}
      </FlexPlus>
    );
  }
}
