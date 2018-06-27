import React from "react";
import { Flex } from "rebass";

const CenterAlign = Flex.extend`
  width: 100%;
  height: 100%;
  justifycontent: center;
  alignitems: center;
`;

const Loading = props => {
  if (props.pastDelay) {
    return <CenterAlign>Loading...</CenterAlign>;
  } else {
    return null;
  }
};

export default Loading;
