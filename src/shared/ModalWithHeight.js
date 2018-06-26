import React from "react"
import { Modal } from "rebass"
import { height } from "styled-system"

const ModalWithHeight = Modal.extend`
  ${height};
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding: 0;
  border-radius: 0;
`

export default ModalWithHeight
