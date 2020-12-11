import React from 'react';
import { Container, Image, List, Segment } from 'semantic-ui-react';

function Footer() {
  return (
    <Container fluid>
      <Segment inverted vertical>
        <Container textAlign="center">
          <Image centered size="mini" src="https://react.semantic-ui.com/logo.png" />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              CopyRight @2020
            </List.Item>
          </List>
        </Container>
      </Segment>
    </Container>
  );
}

export default Footer;
