import React from "react";
import { padding, color, maxWidth } from "styled-system";
import { Flex } from "rebass";

const ContainerWithBg = Flex.extend`
  ${color};
  width: 100%;
  ${padding};
  ${maxWidth};
  margin: ${props => props.margin};
`;

export default ContainerWithBg;
