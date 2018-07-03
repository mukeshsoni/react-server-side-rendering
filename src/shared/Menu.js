import React, { Component } from 'react';
import { Link, Flex, Box, Drawer, Divider } from 'rebass';
import FontAwesome from 'react-fontawesome';
import HideOnMobile from './HideOnMobile.js';
import HideOnNonMobile from './HideOnNonMobile.js';
import YellowButton from './Button/YellowButton.js';
import SubduedText from './Text/SubduedText.js';
// import Drawer from './Drawer.js'

const menuConfig = [
  {
    header: 'ADS',
    items: [
      {
        icon: 'search',
        name: 'All ads'
      },
      {
        icon: 'tag',
        name: 'Post your ad'
      }
    ]
  },
  {
    header: 'USER PROFILE',
    items: [
      {
        icon: 'tag',
        name: 'My ads'
      },
      {
        icon: 'star',
        name: 'Favorites'
      },
      {
        icon: 'cog',
        name: 'Settings'
      }
    ]
  },
  {
    header: 'OTHER',
    items: [
      {
        icon: 'comments',
        name: 'FAQ'
      },
      {
        icon: 'shield',
        name: 'Stay safe'
      },
      {
        icon: 'fighter-jet',
        name: 'How to sell fast'
      },
      {
        icon: 'ellipsis-h',
        name: 'More'
      }
    ]
  }
];

export default class Menu extends Component {
  state = { showMenuOnMobile: false };

  handleHamburgerClick = () => {
    this.setState({ showMenuOnMobile: !this.state.showMenuOnMobile });
  };

  getHidableLinks() {
    return (
      <Flex flexDirection={['column', 'row']} mr={2}>
        <Link>All ads</Link>
        <Link>My Profile</Link>
      </Flex>
    );
  }

  getSections() {
    return (
      <React.Fragment>
        {menuConfig.map(section => {
          return this.adSection(section);
        })}
      </React.Fragment>
    );
  }

  adSection(section) {
    return (
      <Box mb={4} key={section.header}>
        <SubduedText>{section.header}</SubduedText>
        <Divider w={1} />
        {section.items.map((item, index) => {
          return (
            <React.Fragment key={section.header + index}>
              <Flex mb={3}>
                <Box mr={3}>
                  <FontAwesome name={item.icon} />
                </Box>
                <Link color="white">{item.name}</Link>
              </Flex>
            </React.Fragment>
          );
        })}
      </Box>
    );
  }

  render() {
    const { showMenuOnMobile } = this.state;

    // const NewDrawer = Drawer.extend`
    //   position: fixed;
    // `;

    return (
      <Flex>
        <Flex onClick={this.handleHamburgerClick} flexDirection="column">
          <HideOnNonMobile mr={2}>
            <FontAwesome name="bars" inverse={true} />
          </HideOnNonMobile>
          <HideOnMobile flexDirection={['column', 'row']} mr={2}>
            {this.getHidableLinks()}
          </HideOnMobile>
          <Drawer open={showMenuOnMobile} bg="dark" position="left" color="white">
            <Flex flexDirection="column" p={3}>
              <YellowButton mb={3}>Post your ad</YellowButton>
              {this.getSections()}
            </Flex>
          </Drawer>
        </Flex>
      </Flex>
    );
  }
}
