import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import './Header.scss';

function TopHeader() {
  return (
    <Container fluid>
      <Menu inverted>
        <Menu.Item as="a" header>
          <Image
            size="mini"
            src="https://react.semantic-ui.com/logo.png"
            style={{ marginRight: '1.5em' }}
          />
          Project Name
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>
      </Menu>
    </Container>
  );
}

export default TopHeader;
