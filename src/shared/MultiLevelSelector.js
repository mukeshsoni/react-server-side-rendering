import React, { Component } from "react"
import { Flex, Text, Sticky, Divider } from "rebass"
import ListItem from "./ListItem.js"
import MultiLevelSelectHeader from "./MultiLevelSelectHeader"
import FullHeightFlex from "./FullHeightFlex"
import HideOnTablet from "./HideOnTablet.js"

export function getItemFromPath(items, path) {
  return path.reduce((acc, id, index) => {
    if (index === path.length - 1) {
      return acc[id]
    }

    return acc[id].subCategories
  }, items)
}

function getHeaderNameForPath(data, path) {
  if (path.length === 0) {
    return null
  }

  return getItemFromPath(data, path).name
}

function getItems(data, path) {
  if (path.length === 0) {
    return data
  }

  return getItemFromPath(data, path).subCategories
}

export default class MultiLevelSelector extends Component {
  state = {
    path: []
  }

  handleItemClick = path => {
    let selectedItem = getItemFromPath(this.props.data, path)
    // if there are no other sub levels to item selected on path, return that path
    // instead, we can just setState the path and call the onItemSelection prop on every path selection
    if (!selectedItem.subCategories) {
      this.props.onItemSelection(path)
    } else {
      this.setState({
        path
      })
    }
  }

  handleBackButtonClick = () => {
    this.setState({
      path: []
    })
  }

  getListHeader(data, path) {
    // There will be a header only if the selection has moved beyond the first level
    if (path.length === 0) {
      return null
    }

    return (
      <Flex alignItems="center" flexWrap="wrap" mb={3} p={2}>
        {path
          .reduce((acc, selectedId, index) => {
            return acc
              .concat(
                <Text fontWeight="bold">
                  {getHeaderNameForPath(data, path.slice(0, index + 1))}
                </Text>
              )
              .concat(" - ")
          }, [])
          .slice(0, -1)}
      </Flex>
    )
  }

  getColumn(items, path, header) {
    return (
      <Flex flexDirection="column" flex="1 0 auto" mt={3} p={2}>
        {header}
        {items.map((item, index) => (
          <React.Fragment>
            <ListItem
              onClick={this.handleItemClick.bind(this, path.concat(index))}
            >
              {item.name}
            </ListItem>
            <Divider w={1} color="lightblue" />
          </React.Fragment>
        ))}
      </Flex>
    )
  }

  getList(data, path) {
    return (
      <Flex>
        {[-1].concat(path).reduce((acc, selectedId, index, arr) => {
          const subPath = path.slice(0, index)
          const column = this.getColumn(
            getItems(data, subPath),
            subPath,
            this.getListHeader(data, subPath)
          )

          // hide all but last column on mobile devices
          if (index === arr.length - 1) {
            return acc.concat(column)
          } else {
            return acc.concat(
              <HideOnTablet flex="1 0 auto" p={2}>
                {column}
              </HideOnTablet>
            )
          }
        }, [])}
      </Flex>
    )
  }

  render() {
    const { data, onCloseClick, listType } = this.props
    const { path } = this.state

    return (
      <FullHeightFlex flexDirection="column" height="100vh">
        <Sticky top={0} bg="white">
          <MultiLevelSelectHeader
            listType={listType}
            path={path}
            onCloseClick={onCloseClick}
            onBackButtonClick={this.handleBackButtonClick}
          />
        </Sticky>
        {this.getList(data, path)}
      </FullHeightFlex>
    )
  }
}
