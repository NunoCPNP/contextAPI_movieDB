import React, { useContext } from "react"
import styled from "@emotion/styled"

import { store } from "../store/store"

const SideBar = () => {
  const globalState = useContext(store)
  const { state } = globalState

  return (
    <Container>
      ...
    </Container>
  )
}

export default SideBar

const Container = styled('div')``